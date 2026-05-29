# Mask Rules
# FIERO Fabric Simulator V2

---

# Overview

This document defines the official mask rendering rules used throughout FIERO Fabric Simulator V2.

All garment masks must remain modular and independently controllable.

---

# Independent Mask Rules

Each garment uses an independent mask structure.

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

- Masks must not directly modify other masks
- Masks must not directly modify other textures
- Masks must not directly modify shadow layers
- All masks must remain independent

---

# Texture Clipping Rules

Fabric rendering uses:

```txt
repeat rendering
+
mask clipping
```

---

# Important Rules

- Stretch rendering is prohibited
- Fabric proportions must remain realistic
- Pattern distortion is prohibited

---

# Silhouette Preservation Rules

Masks must preserve:

- tailoring silhouette
- natural proportions
- overlap readability
- garment balance

---

# Important Rules

- Silhouette distortion is prohibited
- Hard clipping is prohibited
- Unnatural edge breaks are prohibited

---

# Jacket Mask Rules

The jacket mask controls:

- main silhouette
- lapel shape
- sleeve structure
- front opening balance

---

# Important Rules

- Lapels must remain independently readable
- Front opening balance must remain stable

---

# Vest Mask Rules

The vest mask must:

- render below jacket layers
- render above shirt torso structure
- preserve V-zone visibility

---

# Important Rules

- Vest alignment must remain centered
- V-zone readability must remain stable

---

# Shirt Mask Rules

The shirt mask must preserve:

- collar visibility
- cuff visibility
- natural body fit

---

# Important Rules

- Shirt exposure must remain subtle
- Collar readability must remain stable

---

# Tie Mask Rules

The tie mask must preserve:

- knot visibility
- center alignment
- natural width balance

---

# Important Rules

- Tie distortion is prohibited
- Knot readability must remain stable

---

# Pants Mask Rules

The pants mask must preserve:

- waist alignment
- leg balance
- hem stability

---

# Important Rules

- Leg distortion is prohibited
- Hem instability is prohibited

---

# OUTER Mask Rules

OUTER masks must preserve:

- coat silhouette
- collar hierarchy
- sleeve continuity
- overlap readability

---

# Important Rules

- Coat clipping is prohibited
- Collar collapse is prohibited

---

# Overlap Safety Rules

Mask relationships must preserve:

- natural garment overlap
- readable layering
- stable visibility behavior

---

# Important Rules

- Mask merging is prohibited
- Layer corruption is prohibited

---

# Validation Rules

Mask validation must preserve:

- silhouette continuity
- overlap readability
- stable clipping
- projection continuity

---

# Critical Failure Conditions

```txt
mask corruption
hard clipping
silhouette instability
lapel corruption
collar collapse
```

---

# Final Rule

All renderer masks must remain modular, stable, and independently controllable.