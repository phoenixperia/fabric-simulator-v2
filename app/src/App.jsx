import { useState, useRef, useCallback } from 'react';
import SimulatorCanvas from './components/SimulatorCanvas';
import ControlPanel from './components/ControlPanel';
import { BACKGROUNDS, SHIRT_COLORS, TIE_COLORS } from './config/layers';

export default function App() {
  const [shirtVisible,  setShirtVisible]  = useState(true);
  const [jacketVisible, setJacketVisible] = useState(true);
  const [jacketStyle,   setJacketStyle]   = useState('open');
  const [tieVisible,    setTieVisible]    = useState(false);
  const [vestVisible,   setVestVisible]   = useState(false);
  const [slacksVisible, setSlacksVisible] = useState(false);
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

  const canvasRef = useRef(null);

  const handleExport = useCallback(() => {
    const url = canvasRef.current?.exportPNG();
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = `fiero_${Date.now()}.png`;
    a.click();
  }, []);

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
        />
      </div>
      <ControlPanel
        shirtVisible={shirtVisible}
        setShirtVisible={setShirtVisible}
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
        innerType={innerType}
        setInnerType={setInnerType}
        shirtColor={shirtColor}
        setShirtColor={setShirtColor}
        tieColor={tieColor}
        setTieColor={setTieColor}
        textureLoaded={!!texture}
        textureSrc={textureSrc}
        onTextureUpload={(img, src) => { setTexture(img); setTextureSrc(src); }}
        onTextureClear={() => { setTexture(null); setTextureSrc(null); }}
        tileSize={tileSize}
        setTileSize={setTileSize}
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
        <div className="panel-title">TEXTURE PREVIEW</div>
        {textureSrc ? (
          <>
            {/* タイルプレビュー（実際の適用イメージ） */}
            <div className="texture-tile-preview" style={{
              backgroundImage: `url(${textureSrc})`,
              backgroundSize: `${tileSize}px ${tileSize}px`,
              backgroundRepeat: 'repeat',
            }} />
            {/* フルサイズオリジナル */}
            <div className="texture-preview-label">原画</div>
            <img
              src={textureSrc}
              alt="生地テクスチャ"
              className="texture-preview-full"
            />
            <div className="texture-preview-label">タイルサイズ: {tileSize}px</div>
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
