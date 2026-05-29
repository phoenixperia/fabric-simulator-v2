# Layer Architecture
# FIERO Fabric Simulator V2

---

# Overview

This document defines the official layer structure used throughout FIERO Fabric Simulator V2.

The renderer is built on structured garment relationships rather than flat image generation.

Each garment category exists as an independent rendering layer.

---

# Official Layer Structure

```txt
BASE
INNER
MID
OUTER
ACCESSORY
```

---

# Layer Principle

Each layer owns a different structural responsibility.

Realism emerges from readable relationships between layers.

---

# BASE

Fixed mannequin foundation layer.

---

# Includes

```txt
face
hair
neck
hands
legs
body structure
```

---

# INNER

Body-contact garment layer.

---

# Includes

```txt
shirt
turtleneck
long t-shirt
```

---

# MID

Primary tailoring silhouette layer.

---

# Includes

```txt
single jacket
double jacket
vest
```

---

# OUTER

Outerwear rendering layer.

---

# Includes

```txt
chester coat
trench coat
balmacaan coat
overcoat
```

---

# Important Principle

OUTER garments expand outward from MID structure.

---

# ACCESSORY

Supporting styling layer.

---

# Includes

```txt
tie
scarf
watch
glasses
bag
```

---

# Standard Layer Flow

```txt
BASE
↓
INNER
↓
ACCESSORY(back)
↓
MID
↓
ACCESSORY(front)
↓
OUTER
```

---

# Layer Relationship Principle

Higher layers must never destroy lower-layer readability.

---

# Final Principle

FIERO Fabric Simulator V2 achieves realism through:

- stable layer relationships
- readable overlap
- controlled expansion
- silhouette continuity
- disciplined rendering architecture