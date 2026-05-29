// 100円玉オーバーレイ（生地のスケール確認用）
// 実物直径 22.6mm をキャンバス換算した 54px で表示

export default function CoinOverlay({ style = {} }) {
  return (
    <div style={{
      position: 'absolute',
      left: 16,
      top: 16,
      width: 54,
      height: 54,
      filter: 'drop-shadow(2px 3px 5px rgba(0,0,0,0.55))',
      pointerEvents: 'none',
      userSelect: 'none',
      ...style,
    }}>
      <img
        src="/assets/coin_100yen.png"
        alt="100円玉（22.6mm）"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
}
