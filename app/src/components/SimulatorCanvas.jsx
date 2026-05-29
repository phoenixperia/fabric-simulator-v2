import { useRef, useEffect, useCallback, forwardRef, useImperativeHandle } from 'react';
import { CANVAS_W, CANVAS_H, BASE_IMAGES, MASKS, GARMENT_OFFSETS } from '../config/layers';

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload  = () => resolve(img);
    img.onerror = () => { console.warn('❌ 読み込み失敗:', src); resolve(null); };
    img.src = src;
  });
}

const SimulatorCanvas = forwardRef(function SimulatorCanvas(
  { shirtVisible, jacketVisible, jacketStyle, tieVisible, vestVisible, slacksVisible, innerType, shirtColor, tieColor, texture, tileSize, jacketTextureOn, vestTextureOn, slacksTextureOn, background },
  ref
) {
  const canvasRef = useRef(null);
  const imgs      = useRef({});
  const ready     = useRef(false);

  useImperativeHandle(ref, () => ({
    exportPNG: () => canvasRef.current?.toDataURL('image/png'),
  }));

  useEffect(() => {
    const srcs = [...Object.values(BASE_IMAGES), ...Object.values(MASKS)];
    Promise.all(srcs.map(src => loadImage(src).then(img => [src, img])))
      .then(results => {
        results.forEach(([src, img]) => {
          if (img) {
            imgs.current[src] = img;
            console.log('✅', src.split('/').pop(), img.naturalWidth, 'x', img.naturalHeight);
          }
        });
        ready.current = true;
        draw();
      });
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ready.current) return;
    const ctx = canvas.getContext('2d');
    const W = CANVAS_W, H = CANVAS_H;

    // 背景
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, W, H);

    // マネキン素体（v8: 透明背景）
    const mannequin = imgs.current[BASE_IMAGES.mannequin];
    if (mannequin) {
      ctx.drawImage(mannequin, 0, 0, W, H);
    }

    // インナー（ロングT等。シャツの下に描画）
    if (innerType === 'longt' || innerType === 'turtleneck') {
      const key      = innerType === 'longt' ? 'innerLongt' : 'innerTurtleneck';
      const maskKey  = innerType === 'longt' ? 'innerLongtFull' : 'innerTurtleneckFull';
      const innerImg  = imgs.current[BASE_IMAGES[key]];
      const innerMask = imgs.current[MASKS[maskKey]];
      if (innerImg && innerMask) {
        const { dx, dy, scaleX } = GARMENT_OFFSETS[key];
        drawClipped(ctx, innerImg, innerMask, W, H, dx, dy, scaleX);
      }
    }

    // シャツ（常にfull maskを使用。ジャケットが上に乗ることで自然にVゾーンが見える）
    if (shirtVisible) {
      const shirtKey  = tieVisible ? 'shirtClosed' : 'shirtOpen';
      const maskKey   = tieVisible ? 'shirtClosedFull' : 'shirtOpenFull';
      const shirtImg  = imgs.current[BASE_IMAGES[shirtKey]];
      const shirtMask = imgs.current[MASKS[maskKey]];
      if (shirtImg && shirtMask) {
        const { dx, dy, scaleX } = GARMENT_OFFSETS[shirtKey];
        const tint = hexToRgb(shirtColor);
        drawClipped(ctx, shirtImg, shirtMask, W, H, dx, dy, scaleX, 1.0, 0, 0, false, tint, null, 120, 128);

        // ── シャツ裾ギャップ補完 ─────────────────────────────
        // シャツマスクが腰サイドで途切れるため、スラックス着用時に
        // マネキンの白い下着が透けて見える問題を解消する。
        // シャツ色でサイドのギャップ帯を塗りつぶす。
        ctx.fillStyle = shirtColor;
        // 左サイド：x=4%〜26%、y=37%〜44.5%（背景端を避ける）
        ctx.fillRect(W * 0.04, H * 0.37, W * 0.22, H * 0.075);
        // 右サイド：x=74%〜96%、y=37%〜44.5%
        ctx.fillRect(W * 0.74, H * 0.37, W * 0.22, H * 0.075);
      }
    }

    // スラックス（シャツの上、ベスト・ジャケットの下）
    if (slacksVisible) {
      const slacksImg  = imgs.current[BASE_IMAGES.slacksCharcoal];
      const slacksMask = imgs.current[MASKS.slacksCharcoalFull];
      if (slacksImg && slacksMask) {
        const { dx, dy, scaleX, erode = 0 } = GARMENT_OFFSETS.slacksCharcoal;
        const slacksTex = (slacksTextureOn && texture) ? texture : null;
        drawClipped(ctx, slacksImg, slacksMask, W, H, dx, dy, scaleX, 1.0, erode, 0, false, null, slacksTex, tileSize);
      }
    }

    // タイ（シャツの上、ベスト・ジャケットの下）
    if (tieVisible) {
      const tieImg  = imgs.current[BASE_IMAGES.tieNavy];
      const tieMask = imgs.current[MASKS.tieNavyFull];
      if (tieImg && tieMask) {
        const { dx, dy, scaleX, scaleY = 1.0, erode = 0 } = GARMENT_OFFSETS.tieNavy;
        const tieTint = tieColor ? hexToRgb(tieColor) : null;
        drawClipped(ctx, tieImg, tieMask, W, H, dx, dy, scaleX, scaleY, erode, 0, false, tieTint, null, 120, 128, 50);
      }
    }

    // ベスト（タイの上、ジャケットの下）
    // ベスト裾でクリップ → スラックスエリアへの描画を完全防止
    if (vestVisible) {
      const vestImg  = imgs.current[BASE_IMAGES.vestCharcoal];
      const vestMask = imgs.current[MASKS.vestCharcoalFull];
      if (vestImg && vestMask) {
        const { dx, dy, scaleX, scaleY = 1.0, erode = 0, dilate = 0 } = GARMENT_OFFSETS.vestCharcoal;
        const vestTex = (vestTextureOn && texture) ? texture : null;
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, H * 0.62); // ベスト裾カットオフ（スラックスエリア除外）
        ctx.clip();
        drawClipped(ctx, vestImg, vestMask, W, H, dx, dy, scaleX, scaleY, erode, dilate, false, null, vestTex, tileSize);
        ctx.restore();
      }
    }

    // ジャケット（ヘムマスク＋bgRemoveでスタジオ背景＋Vゾーン灰色を除去）
    if (jacketVisible) {
      const jacketSrc = jacketStyle === 'open' ? BASE_IMAGES.jacketOpen : (BASE_IMAGES.jacketClosed ?? BASE_IMAGES.jacketOpen);
      const maskSrc   = jacketStyle === 'open' ? MASKS.jacketOpenFull   : (MASKS.jacketClosedFull ?? MASKS.jacketOpenFull);
      const jacketImg = imgs.current[jacketSrc];
      const maskImg   = imgs.current[maskSrc];
      if (jacketImg && maskImg) {
        const offsetKey = jacketStyle === 'open' ? 'jacketOpen' : 'jacketClosed';
        const { dx, dy, scaleX, scaleY = 1.0, erode = 0 } = GARMENT_OFFSETS[offsetKey];
        const jacketTex = (jacketTextureOn && texture) ? texture : null;
        // bgRemove=true: スタジオグレー背景を透明化（Vゾーンのグレー・白も除去）
        drawClipped(ctx, jacketImg, maskImg, W, H, dx, dy, scaleX, scaleY, erode, 0, true, null, jacketTex, tileSize);
      }

      // ── Vゾーン punch-through ────────────────────────────────
      // ジャケットのVゾーンに焼き込まれた内容を上書きし、正しいシャツ・タイ・ベストを表示する
      ctx.save();
      ctx.beginPath();
      // ラペル内側のVゾーン台形（1080×1440基準）
      const tY = H * 0.19;   // 上端Y（タイノット上）
      const bY = H * 0.50;   // 下端Y（ジャケットボタン直上で止める）
      const tL = W * 0.458;  // 上端左
      const tR = W * 0.552;  // 上端右
      const bL = W * 0.476;  // 下端左
      const bR = W * 0.524;  // 下端右
      ctx.moveTo(tL, tY);
      ctx.lineTo(tR, tY);
      ctx.lineTo(bR, bY);
      ctx.lineTo(bL, bY);
      ctx.closePath();
      ctx.clip();

      // Vゾーン内にシャツを再描画
      if (shirtVisible) {
        const shirtKey2  = tieVisible ? 'shirtClosed' : 'shirtOpen';
        const maskKey2   = tieVisible ? 'shirtClosedFull' : 'shirtOpenFull';
        const shirtImg2  = imgs.current[BASE_IMAGES[shirtKey2]];
        const shirtMask2 = imgs.current[MASKS[maskKey2]];
        if (shirtImg2 && shirtMask2) {
          const { dx: sdx, dy: sdy, scaleX: ssx } = GARMENT_OFFSETS[shirtKey2];
          const tint = hexToRgb(shirtColor);
          drawClipped(ctx, shirtImg2, shirtMask2, W, H, sdx, sdy, ssx, 1.0, 0, 0, false, tint, null, 120, 128);
        }
      }

      // Vゾーン内にタイを再描画
      if (tieVisible) {
        const tieImg2  = imgs.current[BASE_IMAGES.tieNavy];
        const tieMask2 = imgs.current[MASKS.tieNavyFull];
        if (tieImg2 && tieMask2) {
          const { dx: tdx, dy: tdy, scaleX: tsx, scaleY: tsy = 1.0 } = GARMENT_OFFSETS.tieNavy;
          const tieTint = tieColor ? hexToRgb(tieColor) : null;
          drawClipped(ctx, tieImg2, tieMask2, W, H, tdx, tdy, tsx, tsy, 0, 0, false, tieTint, null, 120, 128, 50);
        }
      }

      // Vゾーン内にベストを再描画（ベスト表示時のみ）
      if (vestVisible) {
        const vestImg2  = imgs.current[BASE_IMAGES.vestCharcoal];
        const vestMask2 = imgs.current[MASKS.vestCharcoalFull];
        if (vestImg2 && vestMask2) {
          const { dx: vdx, dy: vdy, scaleX: vsx, scaleY: vsy = 1.0 } = GARMENT_OFFSETS.vestCharcoal;
          const vestTex2 = (vestTextureOn && texture) ? texture : null;
          drawClipped(ctx, vestImg2, vestMask2, W, H, vdx, vdy, vsx, vsy, 0, 0, false, null, vestTex2, tileSize);
        }
      }

      ctx.restore();
      // ── punch-through ここまで ─────────────────────────────
    }
  }, [shirtVisible, jacketVisible, jacketStyle, tieVisible, vestVisible, slacksVisible, innerType, shirtColor, tieColor, texture, tileSize, jacketTextureOn, vestTextureOn, slacksTextureOn, background]);

  useEffect(() => {
    if (ready.current) draw();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_W}
      height={CANVAS_H}
      style={{ display: 'block', borderRadius: 4 }}
    />
  );
});

function hexToRgb(hex) {
  const n = parseInt(hex.replace('#', ''), 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}

// ── マスク切り抜き描画 ──────────────────────────────
function drawClipped(ctx, compositeImg, maskImg, W, H, dx = 0, dy = 0, scaleX = 1.0, scaleY = 1.0, erode = 0, dilate = 0, bgRemove = false, tint = null, texture = null, tileSize = 120, maskThreshold = 128, tintBase = 220) {
  const dw = Math.round(W * scaleX);
  const dh = Math.round(H * scaleY);
  const offsetX = dx + Math.round((W - dw) / 2);

  const compCanvas = document.createElement('canvas');
  compCanvas.width = W; compCanvas.height = H;
  const compCtx = compCanvas.getContext('2d');
  compCtx.drawImage(compositeImg, offsetX, dy, dw, dh);
  const compData = compCtx.getImageData(0, 0, W, H);

  const maskCanvas = document.createElement('canvas');
  maskCanvas.width = W; maskCanvas.height = H;
  const maskCtx = maskCanvas.getContext('2d');
  maskCtx.drawImage(maskImg, offsetX, dy, dw, dh);
  const maskData = maskCtx.getImageData(0, 0, W, H);

  // マスク輝度（白=true）を計算
  const white = new Uint8Array(W * H);
  for (let i = 0; i < maskData.data.length; i += 4) {
    white[i >> 2] = (maskData.data[i] + maskData.data[i+1] + maskData.data[i+2]) / 3 > maskThreshold ? 1 : 0;
  }

  // 2パス dilation（横→縦）でマスクをdilateピクセル拡張
  let dilated = white;
  if (dilate > 0) {
    const tmp = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        let v = 0;
        for (let e = -dilate; e <= dilate && !v; e++) {
          const nx = x + e;
          v = (nx >= 0 && nx < W) ? white[y * W + nx] : 0;
        }
        tmp[y * W + x] = v;
      }
    }
    dilated = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        let v = 0;
        for (let e = -dilate; e <= dilate && !v; e++) {
          const ny = y + e;
          v = (ny >= 0 && ny < H) ? tmp[ny * W + x] : 0;
        }
        dilated[y * W + x] = v;
      }
    }
  }

  // 2パス erosion（横→縦）でマスクをerodeピクセル縮小
  let eroded = dilated;
  if (erode > 0) {
    const tmp = new Uint8Array(W * H);
    // 横方向
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        let v = 1;
        for (let e = -erode; e <= erode && v; e++) {
          const nx = x + e;
          v = (nx >= 0 && nx < W) ? dilated[y * W + nx] : 0;
        }
        tmp[y * W + x] = v;
      }
    }
    // 縦方向
    eroded = new Uint8Array(W * H);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        let v = 1;
        for (let e = -erode; e <= erode && v; e++) {
          const ny = y + e;
          v = (ny >= 0 && ny < H) ? tmp[ny * W + x] : 0;
        }
        eroded[y * W + x] = v;
      }
    }
  }

  const output = compCtx.createImageData(W, H);
  for (let i = 0; i < output.data.length; i += 4) {
    let r = compData.data[i], g = compData.data[i+1], b = compData.data[i+2];
    const maxC = Math.max(r, g, b), minC = Math.min(r, g, b);
    // 低彩度ピクセルを除去:
    //   r > 195 → スタジオグレー(210付近)・白シャツ(240-255)を除去
    //   チャコールのアンチエイリアスエッジ(r~170-193)は除去しない
    const isBg = bgRemove && (maxC - minC) < 25 && r > 195;
    if (tint) {
      const lum = (r * 0.299 + g * 0.587 + b * 0.114);
      // 肌色ピクセル（顔・首・手）はtint除外（マスク境界の安全弁）
      const isSkinTone = r > g + 12 && r > b + 20 && lum < 230;
      if (!isSkinTone) {
        const scale = lum / tintBase;
        r = Math.min(255, Math.round(tint[0] * scale));
        g = Math.min(255, Math.round(tint[1] * scale));
        b = Math.min(255, Math.round(tint[2] * scale));
      }
    }
    output.data[i]   = r;
    output.data[i+1] = g;
    output.data[i+2] = b;
    output.data[i+3] = (eroded[i >> 2] && !isBg) ? 255 : 0;
  }

  // テクスチャ合成（C+D）
  if (texture) {
    // [C] 生地色をそのまま貼り付け（色変換なし）
    const texCanvas = document.createElement('canvas');
    texCanvas.width = W; texCanvas.height = H;
    const texCtx = texCanvas.getContext('2d');
    for (let ty = 0; ty < H; ty += tileSize)
      for (let tx = 0; tx < W; tx += tileSize)
        texCtx.drawImage(texture, tx, ty, tileSize, tileSize);
    const texData = texCtx.getImageData(0, 0, W, H).data;
    for (let i = 0; i < output.data.length; i += 4) {
      if (output.data[i + 3] > 0) {
        output.data[i]     = texData[i];
        output.data[i + 1] = texData[i + 1];
        output.data[i + 2] = texData[i + 2];
      }
    }
  }

  compCtx.putImageData(output, 0, 0);

  // [D] ガーメントの陰影を multiply ブレンドで重ねて立体感を出す
  if (texture) {
    const shadowImg = compCtx.createImageData(W, H);
    for (let i = 0; i < shadowImg.data.length; i += 4) {
      if (eroded[i >> 2]) {
        const lum = compData.data[i] * 0.299 + compData.data[i+1] * 0.587 + compData.data[i+2] * 0.114;
        const v = Math.min(255, Math.round(lum * 255 / 55));
        shadowImg.data[i] = shadowImg.data[i+1] = shadowImg.data[i+2] = v;
        shadowImg.data[i+3] = 255;
      } else {
        shadowImg.data[i+3] = 0;
      }
    }
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = W; shadowCanvas.height = H;
    const shadowCtx = shadowCanvas.getContext('2d');
    shadowCtx.putImageData(shadowImg, 0, 0);
    compCtx.globalCompositeOperation = 'multiply';
    compCtx.drawImage(shadowCanvas, 0, 0);
    compCtx.globalCompositeOperation = 'source-over';
  }

  ctx.drawImage(compCanvas, 0, 0);
}

// ── グレー背景クロマキー描画（マスク不要）──────────────
function drawChromaKey(ctx, img, W, H, dx = 0, dy = 0, scaleX = 1.0) {
  const dw = Math.round(W * scaleX);
  const offCanvas = document.createElement('canvas');
  offCanvas.width = W; offCanvas.height = H;
  const offCtx = offCanvas.getContext('2d');
  const offsetX = dx + Math.round((W - dw) / 2);
  offCtx.drawImage(img, offsetX, dy, dw, H);
  const imgData = offCtx.getImageData(0, 0, W, H);
  const d = imgData.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i], g = d[i+1], b = d[i+2];
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    const sat  = maxC - minC;
    // グレー背景（低彩度・中明度）または白シャツ（高輝度）→ 透明
    // 肌色（R が G より著しく大きい）は除外しない
    const isSkin   = r > g + 15;
    const isGrayBg = sat < 25 && r > 160 && r < 235 && !isSkin;
    const isWhite  = r > 235 && g > 235 && b > 235;
    d[i+3] = (isGrayBg || isWhite) ? 0 : 255;
  }

  offCtx.putImageData(imgData, 0, 0);
  ctx.drawImage(offCanvas, 0, 0);
}

export default SimulatorCanvas;
