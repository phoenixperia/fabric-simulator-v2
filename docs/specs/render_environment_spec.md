# Render Environment Specification
# FIERO Fabric Simulator V2

---

# Overview

This document defines the official render environment settings used throughout FIERO Fabric Simulator V2.

All renderer systems must use consistent render conditions.

---

# Camera Specification

## Lens Range

```txt
85mm - 105mm
```

---

## Default Lens

```txt
90mm
```

---

## Camera Height

```txt
chest level
```

---

## Camera Distance

```txt
4 meters from subject
```

Slight telephoto compression at 4m with 90mm lens
creates luxury catalog aesthetic while preserving
fabric micro-texture readability.

---

## Approved Angles

```txt
front
front45
side
back
```

---

# Important Rules

- Wide-angle distortion is prohibited
- Extreme camera angles are prohibited
- All camera settings must remain standardized

---

# Lighting Specification

## Lighting Style

```txt
symmetric balanced studio lighting
```

Bilaterally symmetric soft lighting designed to preserve:

- accurate fabric color
- bilateral symmetry across all layers
- micro-texture readability (fabric weave detail)
- stable layer compositing without shadow accumulation

---

## Main Lights

```txt
two large softboxes at ±45° from camera axis
equal intensity on both sides
```

Bilateral symmetry is required.

Single-side dominant lighting is prohibited.

---

## Light Elevation

```txt
slightly elevated (60° above floor)
pointing downward 10-20°
```

Slight top-down bias creates natural body shading
(chest curve, sleeve drape) without creating
side-dominant macro shadows.

---

## Fill

```txt
optional ambient ceiling bounce
or large white reflector
```

---

## Rim Light

```txt
none or minimal
```

---

## Color Temperature

```txt
5500K neutral daylight
no color cast
no color shift between layers
```

---

## Shadow Behavior

The lighting setup must produce:

- soft, bilaterally symmetric shading
- subtle structural shading only (chest curve, sleeve folds)
- preserved micro-texture (fabric weave detail)

The lighting setup must NOT produce:

- dominant side shadows
- one-sided darkening
- macro shadows that accumulate across layers

---

## Rationale

Asymmetric directional lighting (e.g., single key light from one side)
causes shadow accumulation when garments are rendered as separate layers.

Each layer's baked one-sided shadow stacks with the next layer,
causing progressive darkening of one side in the final composite.

Symmetric lighting eliminates this accumulation while preserving:

- accurate color reproduction
- micro-texture visibility (the primary perception of fabric quality)
- bilateral garment readability

Macro contrast (dramatic side shadows) is editorial styling,
not luxury tailoring presentation.

This renderer prioritizes customer color/fabric evaluation accuracy
over editorial visual drama.

---

# Important Rules

- Harsh cinematic lighting is prohibited
- Strong color lighting is prohibited
- Asymmetric directional lighting is prohibited
- Single-side dominant lighting is prohibited
- Macro side shadows that darken one side are prohibited
- Lighting must remain bilaterally symmetric
- Lighting position must remain fixed across all garment generations
- Color temperature must remain consistent (5500K neutral)
- Micro-texture preservation has priority over editorial drama

---

# Background Specification

## Official Background

```txt
neutral soft gray
```

---

## Optional Backgrounds

```txt
soft warm gray
luxury studio beige
```

---

# Important Rules

- Busy backgrounds are prohibited
- Backgrounds must preserve garment readability

---

# Framing Specification

## Standard Crop

```txt
full body
```

---

## Aspect Ratio

```txt
3:4
```

Standard portrait aspect ratio for full-body presentation.

---

## Subject Positioning

```txt
horizontally centered
```

Subject must be perfectly centered horizontally in the frame.

Left or right shifted positioning is prohibited.

---

## Vertical Positioning

```txt
8% breathing room below feet
5% breathing room above head
```

Shoes must be fully visible with natural breathing room below.

Cropping shoes is prohibited.

---

## Optional Crops

```txt
half body
upper body
detail crop
```

(Phase1 generates full body only.
 Detail crops are derived in post-processing when needed.)

---

# Important Rules

- Full-body rendering is the primary validation format
- Shoes must remain fully visible
- Subject must remain horizontally centered
- Aspect ratio must remain 3:4 across all generations

---

# Pose Specification

## Standard Pose

```txt
neutral standing
```

---

## Arm Position

```txt
natural relaxed
```

---

## Hand Position

```txt
natural side placement
```

---

# Important Rules

- Dynamic fashion poses are prohibited
- Pose consistency is required for validation stability

---

# Expression Specification

## Standard Expression

```txt
neutral confident
```

---

# Important Rules

- Expression must not overpower garment presentation

---

# Render Resolution

## Production Resolution

```txt
2880 x 3840 (3:4 aspect ratio)
```

---

## Generation Resolution (AI image generation)

```txt
2880 x 3840
```

---

## Simulator Canvas Resolution

```txt
1080 x 1440 (3:4 aspect ratio)
```

Downscaled from generation resolution for runtime performance.

---

## Social Export

```txt
1080 x 1440
3:4 aspect ratio
```

---

# Important Rules

- Low-resolution validation is prohibited
- Resolution must preserve silhouette readability
- Resolution must preserve projection precision

---

# Validation Rules

Validation rendering must preserve:

- silhouette readability
- overlap readability
- projection continuity
- shadow stability
- collar readability

---

# Failure Conditions

Critical failures include:

```txt
wide-angle distortion
harsh shadows
background clutter
projection blur
shadow instability
```

---

# Final Rule

All render environment settings must remain consistent across all renderer systems.