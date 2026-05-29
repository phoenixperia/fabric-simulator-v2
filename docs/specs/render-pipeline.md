# Render Pipeline
# FIERO Fabric Simulator V2

---

# Overview

This document defines the official rendering pipeline used throughout FIERO Fabric Simulator V2.

All renderer systems must follow this render order.

---

# Official Render Flow

```txt
background
↓
base mannequin
↓
fabric texture repeat
↓
mask clipping
↓
shadow multiply
↓
outline overlay
↓
final composite
↓
export
```

---

# 01 Background Render

Render the background layer first.

---

# Approved Backgrounds

```txt
neutral gray
warm gray
studio beige
```

---

# Important Rules

- Background is always the lowest layer
- Busy backgrounds are prohibited

---

# 02 Base Mannequin Render

Render the approved mannequin base.

---

# Important Rules

- Mannequin structure must remain fixed
- Camera settings must remain standardized

---

# 03 Fabric Texture Repeat

Apply fabric textures using repeat rendering.

---

# Important Rules

- Stretch rendering is prohibited
- Fabric proportions must remain realistic
- Pattern scale must remain stable

---

# 04 Mask Clipping

Apply garment masks independently.

---

# Standard Mask Targets

```txt
jacket
vest
shirt
pants
tie
coat
```

---

# Important Rules

- All masks must remain independent
- Masks must not directly modify other masks

---

# 05 Shadow Multiply

Apply shadow rendering using multiply blending.

---

# Important Rules

- Shadows must remain soft
- Harsh contrast is prohibited
- Shadow depth must preserve silhouette readability

---

# 06 Outline Overlay

Apply subtle outline enhancement.

---

# Important Rules

- Outlines must remain thin
- Illustration-style outlines are prohibited
- Outline visibility must remain subtle

---

# 07 Final Composite

Combine all rendered layers into the final image.

---

# Important Rules

- Layer relationships must remain stable
- Overlap behavior must remain natural

---

# 08 Export

Export the final rendered image.

---

# Approved Formats

```txt
PNG
JPG
```

---

# Standard Social Export

```txt
1080 x 1350
4:5
```

---

# Important Rules

- Export quality must preserve projection precision
- Compression artifacts are prohibited

---

# Validation Rules

Validation rendering must preserve:

- silhouette readability
- overlap stability
- projection continuity
- shadow consistency
- collar clarity

---

# Failure Conditions

Critical failures include:

```txt
projection stretching
mask clipping errors
shadow instability
outline overdraw
layer corruption
```

---

# Final Rule

All renderer systems must follow the official render pipeline order.