import { BACKGROUNDS, SHIRT_COLORS, TIE_COLORS } from '../config/layers';

export default function ControlPanel({
  shirtVisible,  setShirtVisible,
  jacketVisible, setJacketVisible,
  jacketStyle,   setJacketStyle,
  tieVisible,    setTieVisible,
  vestVisible,   setVestVisible,
  slacksVisible, setSlacksVisible,
  coatVisible,   setCoatVisible,
  coatStyle,     setCoatStyle,
  innerType,     setInnerType,
  shirtColor,    setShirtColor,
  tieColor,      setTieColor,
  textureLoaded,
  jacketTextureOn, setJacketTextureOn,
  vestTextureOn,   setVestTextureOn,
  slacksTextureOn, setSlacksTextureOn,
  background,    setBackground,
  onExport,
}) {
  return (
    <div className="control-panel">
      <div className="panel-title">FIERO Fabric Simulator</div>

      {/* レイヤー */}
      <section className="panel-section">
        <div className="section-label">レイヤー</div>

        {/* シャツ */}
        <label className="toggle-row">
          <input type="checkbox" checked={shirtVisible}
            disabled={innerType === 'longt' || innerType === 'turtleneck'}
            onChange={e => setShirtVisible(e.target.checked)} />
          <span style={{ opacity: (innerType === 'longt' || innerType === 'turtleneck') ? 0.35 : 1 }}>シャツ</span>
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
          <label style={{ opacity: shirtVisible ? 0.35 : 1 }}>
            <input type="radio" name="innerType" value="longt"
              disabled={shirtVisible}
              checked={innerType === 'longt'}
              onChange={() => setInnerType('longt')} />
            <span>ロングT</span>
          </label>
          <label style={{ opacity: shirtVisible ? 0.35 : 1 }}>
            <input type="radio" name="innerType" value="turtleneck"
              disabled={shirtVisible}
              checked={innerType === 'turtleneck'}
              onChange={() => setInnerType('turtleneck')} />
            <span>タートル</span>
          </label>
        </div>

        {/* タイ */}
        <label className="toggle-row">
          <input type="checkbox" checked={tieVisible}
            disabled={!shirtVisible}
            onChange={e => setTieVisible(e.target.checked)} />
          <span style={{ opacity: !shirtVisible ? 0.35 : 1 }}>タイ（シャツ自動切替）</span>
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

        {/* コート */}
        <label className="toggle-row">
          <input type="checkbox" checked={coatVisible}
            onChange={e => setCoatVisible(e.target.checked)} />
          <span>コート（仮・位置確認用）</span>
        </label>
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
          ・ジャケット クローズ
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
