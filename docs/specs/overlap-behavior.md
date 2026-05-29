# Overlap Behavior

## Purpose

This document defines the official overlap behavior rules for FIERO Fabric Simulator V2.

Overlap behavior controls how clothing layers visually interact with each other during rendering.

The purpose is to preserve realistic tailoring appearance and maintain natural clothing relationships.

---

# Core Philosophy

Natural overlap behavior is one of the highest priorities of the renderer.

The renderer must preserve:

* Realistic garment layering
* Natural visibility transitions
* Elegant tailoring balance
* Stable rendering behavior

Artificial overlap behavior must be avoided.

---

# Core Layer Priority

Basic layer priority:

Jacket
→ Vest
→ Tie
→ Shirt
→ Pants
→ Mannequin

Outer layers always visually dominate inner layers unless intentionally revealed.

---

# Jacket Overlap Rules

## Jacket Over Vest

The jacket is always the outermost tailoring layer.

The jacket:

* Covers vest side areas
* Preserves vest V-zone visibility
* Preserves natural chest balance

Vest visibility must remain centered and elegant.

---

## Jacket Over Shirt

The jacket covers most shirt areas while preserving:

* Collar visibility
* Cuff visibility
* Front opening visibility

Shirt exposure must remain subtle and realistic.

---

## Jacket Sleeve Overlap

Jacket sleeves must preserve partial shirt cuff visibility.

Standard cuff exposure:

* Approximately 1cm to 1.5cm visible

Cuff visibility must remain balanced and elegant.

---

# Vest Overlap Rules

## Vest Over Shirt

The vest sits above the shirt layer.

The vest:

* Covers shirt torso area
* Preserves sleeve visibility
* Preserves collar visibility

Vest overlap must remain clean and centered.

---

## Vest Over Tie

The tie sits above the vest opening area.

The tie knot and upper tie structure must remain visible.

Tie overlap must preserve formal tailoring balance.

---

# Tie Overlap Rules

## Tie Over Shirt

The tie always sits above the shirt front area.

The tie:

* Preserves center alignment
* Preserves knot visibility
* Maintains natural width balance

Tie rendering must remain stable during all visibility combinations.

---

# Pants Overlap Rules

## Pants Over Shirt

Pants sit above the lower shirt structure.

Shirt tuck behavior must remain realistic.

Waist alignment must remain natural.

---

## Pants Over Socks

Pants partially cover socks.

Sock visibility must remain subtle.

---

# Double Jacket Overlap Rules

## Double Front Structure

Double jackets require:

* Front overlap preservation
* Natural button alignment
* Realistic lapel balance
* Stable front visibility behavior

Front overlap must remain elegant and symmetrical.

---

# Women Skirt Overlap Rules

## Skirt Over Legs

Women skirt rendering must preserve:

* Natural leg visibility
* Realistic skirt proportions
* Stable overlap behavior

Leg exposure must remain elegant and realistic.

---

# Visibility Stability Rules

Visibility switching must never break overlap relationships.

Examples:

* Jacket OFF
* Vest OFF
* Tie OFF

All combinations must preserve stable rendering behavior.

---

# Outerwear (Coat) Overlap Rules

## Design Policy

コートはジャケットの上ではなく、**シャツの直上レイヤー**として扱う。

理由：
- コートの形状（シングル・ダブル・トレンチ）によってジャケットの見える範囲が大きく異なる
- 組み合わせごとに専用マスクを用意するコストが高い
- あくまでイメージ確認ツールとして、シンプルさを優先する

## レンダリング構造

```
背景 → 素体 → シャツ（peek/full） → ジャケット OR コート（どちらか一方）
```

ジャケットとコートは**同一レイヤーに排他表示**とする。

## コート着用時のシャツ見え方

コートの種類に関わらず、シャツの見え方は統一する：

* えり（カラー）：常に表示
* Vゾーン：常に表示
* 袖口（カフス）：常に表示

使用マスク：`shirt_peek_mask`（シャツのpeekマスクをそのまま使用）

## 将来対応メモ

もし将来「ジャケット＋コート」の重ね着を実装する場合は、
コートの種類ごとに以下のマスクが必要：

* `jacket_peek_lapels_cuffs` ← シングル系コート着用時（ラペル＋袖口）
* `jacket_peek_cuffs_only`   ← ダブル・トレンチ着用時（袖口のみ）

---

# Important Rules

* Overlap behavior must remain modular
* Layer relationships must remain stable
* Realistic tailoring balance is prioritized
* Hard edge clipping must be avoided
* Artificial overlap behavior is prohibited

---

# Rendering Priority

If visual conflict occurs:

1. Realistic appearance has highest priority
2. Natural silhouette preservation is prioritized
3. Stable overlap behavior is required
4. Elegant tailoring balance must be preserved

The renderer prioritizes realism over strict geometric accuracy.
