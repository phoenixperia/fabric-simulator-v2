import { useRef } from 'react';
import { BACKGROUNDS, SHIRT_COLORS, TIE_COLORS } from '../config/layers';

export default function ControlPanel({
  shirtVisible,  setShirtVisible,
  jacketVisible, setJacketVisible,
  jacketStyle,   setJacketStyle,
  tieVisible,    setTieVisible,
  vestVisible,   setVestVisible,
  slacksVisible, setSlacksVisible,
  innerType,     setInnerType,
  shirtColor,    setShirtColor,
  tieColor,      setTieColor,
  textureLoaded, textureSrc, onTextureUpload, onTextureClear,
  tileSize,      setTileSize,
  jacketTextureOn, setJacketTextureOn,
  vestTextureOn,   setVestTextureOn,
  slacksTextureOn, setSlacksTextureOn,
  background,    setBackground,
  onExport,
}) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target.result;
      const img = new Image();
      img.onload = () => onTextureUpload(img, src);
      img.src = src;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div className="control-panel">
      <div className="panel-title">FIERO Fabric Simulator</div>

      {/* レイヤー */}
      <section className="panel-section">
        <div className="section-label">レイヤー</div>

        {/* シャツ */}
        <label className="toggle-row">
          <input type="checkbox" checked={shirtVisible}
            onChange={e => setShirtVisible(e.target.checked)} />
          <span>シャツ</span>
        </label>

        {shirtVisible && (
          <div className="radio-row" style={{ paddingLeft: 22, flexWrap: 'wrap', gap: 6 }}>
            {SHIRT_COLORS.map(sc => (
              <label key={sc.id} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <input type="radio" name="shirtColor" value={sc.id}
                  checked={shirtColor === sc.color}
                  onChange={() => setShirtColor(sc.color)} />
                <span className="bg-swatch" style={{ background: sc.color, border: '1px solid #aaa' }} />
                <span>{sc.label}</span>
              </label>
            ))}
          </div>
        )}

{/* インナー */}
        <div className="section-label" style={{ marginTop: 8 }}>インナー</div>
        <div className="radio-row">
          <label>
            <input type="radio" name="innerType" value="none"
              checked={innerType === 'none'}
              onChange={() => setInnerType('none')} />
            <span>なし</span>
          </label>
          <label>
            <input type="radio" name="innerType" value="longt"
              checked={innerType === 'longt'}
              onChange={() => setInnerType('longt')} />
            <span>ロングT</span>
          </label>
          <label>
            <input type="radio" name="innerType" value="turtleneck"
              checked={innerType === 'turtleneck'}
              onChange={() => setInnerType('turtleneck')} />
            <span>タートル</span>
          </label>
        </div>

        {/* タイ */}
        <label className="toggle-row">
          <input type="checkbox" checked={tieVisible}
            onChange={e => setTieVisible(e.target.checked)} />
          <span>タイ（シャツ自動切替）</span>
        </label>

        {tieVisible && (
          <div className="radio-row" style={{ paddingLeft: 22, flexWrap: 'wrap', gap: 6 }}>
            {TIE_COLORS.map(tc => (
              <label key={tc.id} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <input type="radio" name="tieColor" value={tc.id}
                  checked={tieColor === tc.color}
                  onChange={() => setTieColor(tc.color)} />
                <span className="bg-swatch" style={{
                  background: tc.color ?? '#1a2a5e',
                  border: '1px solid #aaa'
                }} />
                <span>{tc.label}</span>
              </label>
            ))}
          </div>
        )}

        {/* スラックス */}
        <label className="toggle-row">
          <input type="checkbox" checked={slacksVisible}
            onChange={e => setSlacksVisible(e.target.checked)} />
          <span>スラックス</span>
        </label>
        {slacksVisible && textureLoaded && (
          <label className="toggle-row" style={{ paddingLeft: 22, fontSize: 11, color: '#555' }}>
            <input type="checkbox" checked={slacksTextureOn}
              onChange={e => setSlacksTextureOn(e.target.checked)} />
            <span>生地を適用</span>
          </label>
        )}

        {/* ベスト */}
        <label className="toggle-row">
          <input type="checkbox" checked={vestVisible}
            onChange={e => setVestVisible(e.target.checked)} />
          <span>ベスト</span>
        </label>
        {vestVisible && textureLoaded && (
          <label className="toggle-row" style={{ paddingLeft: 22, fontSize: 11, color: '#555' }}>
            <input type="checkbox" checked={vestTextureOn}
              onChange={e => setVestTextureOn(e.target.checked)} />
            <span>生地を適用</span>
          </label>
        )}

        {/* ジャケット */}
        <label className="toggle-row">
          <input type="checkbox" checked={jacketVisible}
            onChange={e => setJacketVisible(e.target.checked)} />
          <span>ジャケット</span>
        </label>

        {jacketVisible && textureLoaded && (
          <label className="toggle-row" style={{ paddingLeft: 22, fontSize: 11, color: '#555' }}>
            <input type="checkbox" checked={jacketTextureOn}
              onChange={e => setJacketTextureOn(e.target.checked)} />
            <span>生地を適用</span>
          </label>
        )}
        {jacketVisible && (
          <div className="radio-row" style={{ paddingLeft: 22 }}>
            <label>
              <input type="radio" name="jacketStyle" value="open"
                checked={jacketStyle === 'open'}
                onChange={() => setJacketStyle('open')} />
              <span>オープン</span>
            </label>
            <label>
              <input type="radio" name="jacketStyle" value="closed"
                checked={jacketStyle === 'closed'}
                onChange={() => setJacketStyle('closed')} />
              <span>クローズ</span>
            </label>
          </div>
        )}
      </section>

      {/* 生地テクスチャ */}
      <section className="panel-section">
        <div className="section-label">生地テクスチャ（ジャケット）</div>
        <button className="btn-upload" onClick={() => fileInputRef.current?.click()}>
          {textureLoaded ? '生地を変更' : '生地をアップロード'}
        </button>
        <input ref={fileInputRef} type="file" accept="image/*"
          style={{ display: 'none' }} onChange={handleFileChange} />

        {textureLoaded && (
          <>
            <button className="btn-clear" onClick={onTextureClear}>
              テクスチャを削除
            </button>
            <div className="slider-row">
              <span>タイルサイズ: {tileSize}px</span>
              <input type="range" min={40} max={300} value={tileSize}
                onChange={e => setTileSize(Number(e.target.value))} />
            </div>
          </>
        )}
      </section>

      {/* 背景 */}
      <section className="panel-section">
        <div className="section-label">背景</div>
        {BACKGROUNDS.map(bg => (
          <label key={bg.id} className="toggle-row">
            <input type="radio" name="background" value={bg.id}
              checked={background === bg.color}
              onChange={() => setBackground(bg.color)} />
            <span className="bg-swatch" style={{ background: bg.color }} />
            <span>{bg.label}</span>
          </label>
        ))}
      </section>

      {/* 準備中 */}
      <section className="panel-section">
        <div className="section-label">準備中</div>
        <div style={{ color: '#555', fontSize: 11, lineHeight: 1.8 }}>
          ・ジャケット クローズ<br />
          ・スラックス マスク<br />
          ・インナー切替（タートル / ロングT）<br />
          ・シャツ色切替
        </div>
      </section>

      {/* エクスポート */}
      <section className="panel-section">
        <button className="btn-export" onClick={onExport}>
          PNG で書き出し
        </button>
      </section>
    </div>
  );
}
