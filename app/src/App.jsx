import { useState, useRef, useCallback } from 'react';
import SimulatorCanvas from './components/SimulatorCanvas';
import ControlPanel from './components/ControlPanel';
import CoinOverlay from './components/CoinOverlay';
import { BACKGROUNDS, SHIRT_COLORS, TIE_COLORS } from './config/layers';

export default function App() {
  const [shirtVisible,  setShirtVisible]  = useState(true);
  const [jacketVisible, setJacketVisible] = useState(true);
  const [jacketStyle,   setJacketStyle]   = useState('open');
  const [tieVisible,    setTieVisible]    = useState(false);
  const [vestVisible,   setVestVisible]   = useState(false);
  const [slacksVisible, setSlacksVisible] = useState(false);
  const [coatVisible,   setCoatVisible]   = useState(false);
  const [coatStyle,     setCoatStyle]     = useState('charcoal');
  const [innerType,     setInnerType]     = useState('none');
  const [shirtColor,    setShirtColor]    = useState(SHIRT_COLORS[0].color);
  const [tieColor,      setTieColor]      = useState(TIE_COLORS[0].color);
  const [texture,          setTexture]         = useState(null);
  const [textureSrc,       setTextureSrc]      = useState(null);
  const [tileSize,         setTileSize]        = useState(120);
  const [jacketTextureOn,  setJacketTextureOn] = useState(true);
  const [vestTextureOn,    setVestTextureOn]   = useState(true);
  const [slacksTextureOn,  setSlacksTextureOn] = useState(true);
  const [background,    setBackground]    = useState(BACKGROUNDS[0].color);
  const [coinVisible,   setCoinVisible]   = useState(false);

  const canvasRef    = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target.result;
      const img = new Image();
      img.onload = () => { setTexture(img); setTextureSrc(src); };
      img.src = src;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, []);

  // シャツをOFFにしたらタイも自動的にOFF
  const handleSetShirtVisible = useCallback((val) => {
    setShirtVisible(val);
    if (!val) setTieVisible(false);
  }, []);

  const handleExport = useCallback(() => {
    const url = canvasRef.current?.exportPNG();
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = `fiero_${Date.now()}.png`;
    a.click();
  }, []);

  const textureLoaded = !!texture;

  return (
    <div className="app">
      <div className="canvas-area">
        <SimulatorCanvas
          ref={canvasRef}
          shirtVisible={shirtVisible}
          jacketVisible={jacketVisible}
          jacketStyle={jacketStyle}
          tieVisible={tieVisible}
          vestVisible={vestVisible}
          slacksVisible={slacksVisible}
          innerType={innerType}
          shirtColor={shirtColor}
          tieColor={tieColor}
          texture={texture}
          tileSize={tileSize}
          jacketTextureOn={jacketTextureOn}
          vestTextureOn={vestTextureOn}
          slacksTextureOn={slacksTextureOn}
          background={background}
          coatVisible={coatVisible}
          coatStyle={coatStyle}
        />
      </div>

      <ControlPanel
        shirtVisible={shirtVisible}
        setShirtVisible={handleSetShirtVisible}
        jacketVisible={jacketVisible}
        setJacketVisible={setJacketVisible}
        jacketStyle={jacketStyle}
        setJacketStyle={setJacketStyle}
        tieVisible={tieVisible}
        setTieVisible={setTieVisible}
        vestVisible={vestVisible}
        setVestVisible={setVestVisible}
        slacksVisible={slacksVisible}
        setSlacksVisible={setSlacksVisible}
        coatVisible={coatVisible}
        setCoatVisible={setCoatVisible}
        coatStyle={coatStyle}
        setCoatStyle={setCoatStyle}
        innerType={innerType}
        setInnerType={setInnerType}
        shirtColor={shirtColor}
        setShirtColor={setShirtColor}
        tieColor={tieColor}
        setTieColor={setTieColor}
        textureLoaded={textureLoaded}
        jacketTextureOn={jacketTextureOn}
        setJacketTextureOn={setJacketTextureOn}
        vestTextureOn={vestTextureOn}
        setVestTextureOn={setVestTextureOn}
        slacksTextureOn={slacksTextureOn}
        setSlacksTextureOn={setSlacksTextureOn}
        background={background}
        setBackground={setBackground}
        onExport={handleExport}
      />

      {/* 右側：生地テクスチャプレビュー */}
      <div className="texture-preview-area">
        <div className="panel-title">TEXTURE</div>

        {/* アップロードボタン */}
        <button className="btn-upload" onClick={() => fileInputRef.current?.click()}>
          {textureLoaded ? '生地を変更' : '生地をアップロード'}
        </button>
        <input ref={fileInputRef} type="file" accept="image/*"
          style={{ display: 'none' }} onChange={handleFileChange} />

        {textureLoaded ? (
          <>
            {/* 生地テクスチャ（タイルプレビュー） */}
            <div className="texture-preview-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>生地テクスチャ</span>
              <label style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', fontWeight: 'normal', textTransform: 'none', letterSpacing: 0, fontSize: 11, color: '#777' }}>
                <input type="checkbox" checked={coinVisible} onChange={e => setCoinVisible(e.target.checked)} style={{ width: 12, height: 12 }} />
                <span>100円玉</span>
              </label>
            </div>
            <div className="texture-tile-preview" style={{
              backgroundImage: `url(${textureSrc})`,
              backgroundSize: `${tileSize}px ${tileSize}px`,
              backgroundRepeat: 'repeat',
              position: 'relative',
            }}>
              {coinVisible && <CoinOverlay />}
            </div>

            {/* タイルサイズスライダー */}
            <div className="slider-row">
              <span>タイルサイズ: {tileSize}px</span>
              <input type="range" min={40} max={300} value={tileSize}
                onChange={e => setTileSize(Number(e.target.value))} />
            </div>

            {/* 原画 */}
            <div className="texture-preview-label">原画</div>
            <img
              src={textureSrc}
              alt="生地テクスチャ原画"
              className="texture-preview-full"
            />

            <button className="btn-clear" onClick={() => { setTexture(null); setTextureSrc(null); }}>
              テクスチャを削除
            </button>
          </>
        ) : (
          <div className="texture-empty">
            <div className="texture-empty-icon">⬜</div>
            <div className="texture-empty-text">
              生地をアップロードすると<br />ここにプレビューが表示されます
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
