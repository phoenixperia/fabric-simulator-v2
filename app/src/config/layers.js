// キャンバスサイズ（元画像と1:1で描画してCSSでスケーリング）
export const CANVAS_W = 1080;
export const CANVAS_H = 1440;

export const SHIRT_COLORS = [
  { id: 'white',  label: 'ホワイト',        color: '#ffffff' },
  { id: 'saxe',   label: 'サックスブルー',  color: '#9ab4d0' },
  { id: 'salmon', label: 'サーモンピンク',  color: '#f5d5dc' },
];

export const TIE_COLORS = [
  { id: 'navy',      label: 'ネイビー',          color: null },
  { id: 'burgundy',  label: 'ボルドー',          color: '#6B1A2A' },
  { id: 'silver',    label: 'シルバー',          color: '#B8B8B8' },
  { id: 'champagne', label: 'シャンパンゴールド', color: '#C9A84C' },
  { id: 'brown',     label: 'ダークブラウン',    color: '#3D2010' },
  { id: 'green',     label: 'ダークグリーン',    color: '#1B4332' },
  { id: 'pink',      label: '薄いピンク',        color: '#F4C2C2' },
];

export const BACKGROUNDS = [
  { id: 'gray',  label: 'ニュートラルグレー', color: '#d4d0cc' },
  { id: 'warm',  label: 'ウォームグレー',      color: '#d8d2c8' },
  { id: 'beige', label: 'スタジオベージュ',    color: '#e0d8cc' },
];

// ──────────────────────────────────────────────
// ベース画像（レイヤーの一番下）
// ──────────────────────────────────────────────
export const BASE_IMAGES = {
  mannequin:      '/assets/mannequin/base/mannequin_v3.png',
  shirtOpen:      '/assets/garments/shirts/base/shirt_white_open_v5.png',
  shirtClosed:    '/assets/garments/shirts/base/shirt_white_closed_v4.png',
  innerLongt:     '/assets/garments/inners/base/inner_longt_v2.png',
  innerTurtleneck:'/assets/garments/inners/base/inner_turtleneck_v3.png',
  tieNavy:        '/assets/garments/tie/base/tie_navy_v6.png',
  slacksCharcoal: '/assets/garments/trousers/base/slacks_charcoal_v2.png',
  vestCharcoal:   '/assets/garments/vests/base/vest_charcoal_v3.png',
  jacketOpen:     '/assets/garments/jacket/base/jacket_open_v6.png',
  jacketClosed:   '/assets/garments/jacket/base/jacket_closed_v2.png',
};

// ──────────────────────────────────────────────
// マスク（各ガーメントの切り抜き形状）
// ──────────────────────────────────────────────
export const MASKS = {
  shirtOpenFull:      '/assets/garments/shirts/masks/shirt_open_mask_v7.png',
  shirtClosedFull:    '/assets/garments/shirts/masks/shirt_closed_mask_v6.png',
  innerLongtFull:     '/assets/garments/inners/masks/inner_longt_mask_v2_new.png',
  innerTurtleneckFull:'/assets/garments/inners/masks/inner_turtleneck_mask_v3.png',
  tieNavyFull:        '/assets/garments/tie/masks/tie_navy_mask_v3.png',
  slacksCharcoalFull: '/assets/garments/trousers/masks/slacks_charcoal_mask_v5.png',
  vestCharcoalFull:   '/assets/garments/vests/masks/vest_charcoal_fabric_mask_v5.png',
  vestPlacketButton:  '/assets/garments/vests/masks/vest_placket_button_mask_v1.png',
  jacketOpenFull:     '/assets/garments/jacket/masks/jacket_open_hem_mask_v5.png',
  jacketOpenPeek:     '/assets/garments/jacket/masks/jacket_open_hem_mask_v5.png',
  jacketClosedFull:   '/assets/garments/jacket/masks/jacket_closed_hem_mask_v2.png',
  jacketLapelButton:  '/assets/garments/jacket/masks/jacket_lapel_button_mask_v1.png',
};

// ──────────────────────────────────────────────
// ガーメントごとの描画オフセット（px）
// シャツ画像内の体が右にズレている場合は dx をマイナスに
// ──────────────────────────────────────────────
export const GARMENT_OFFSETS = {
  shirtOpen:      { dx: 0, dy: 0, scaleX: 1.0, erode: 2 },
  shirtClosed:    { dx: 0, dy: 0, scaleX: 1.0, erode: 2 },
  innerLongt:     { dx: 0, dy: 0, scaleX: 1.0 },
  innerTurtleneck:{ dx: 0, dy: 0, scaleX: 1.0 },
  tieNavy:        { dx: 0, dy: 0, scaleX: 1.0, erode: 1 },
  slacksCharcoal: { dx: 0, dy: 0, scaleX: 1.0, erode: 2 },
  vestCharcoal:   { dx: 0, dy: -5, scaleX: 1.0, erode: 3 },
  jacketOpen:     { dx: 0, dy: 0, scaleX: 1.0, erode: 0 },
  jacketClosed:   { dx: 0, dy: 0, scaleX: 1.0, erode: 0 },
};

// ──────────────────────────────────────────────
// レンダリング順序の定義
// 上にいくほど後から描画（手前に表示される）
// ──────────────────────────────────────────────
//
//  mannequin（素体）
//    ↓
//  shirt（シャツ、マスクで切り抜き）
//    ↓
//  jacket（ジャケット、マスクで切り抜き ＋ テクスチャ）
//
// ジャケットがシャツの上に乗るので
// 衿・カフス・Vゾーンが自然に露出する
