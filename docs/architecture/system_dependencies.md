# System Dependencies
# FIERO Fabric Simulator V2

---

# Overview

This document defines the official dependency relationships used throughout FIERO Fabric Simulator V2.

The renderer is built as a structured dependency architecture where upstream systems affect downstream systems.

Stable upstream systems are required for stable downstream rendering.

---

# Official Dependency Flow

```txt
mannequin system
↓
layer architecture
↓
mask system
↓
overlap system
↓
projection system
↓
shadow system
↓
outline system
↓
validation system
↓
presentation output
```

---

# Dependency Principle

Earlier systems define the stability of later systems.

Instability propagates downstream.

---

# Mannequin Dependencies

The mannequin system is the root renderer dependency.

---

# Affected Systems

```txt
masks
overlap
projection
shadows
outerwear
presentation
```

---

# Layer Architecture Dependencies

The layer system defines garment relationships and rendering depth.

---

# Affected Systems

```txt
masks
overlap
outerwear
accessories
shadow structure
```

---

# Mask Dependencies

Masks define garment geometry and structure.

---

# Affected Systems

```txt
projection
shadows
outlines
overlap
outerwear
```

---

# Overlap Dependencies

Overlap systems define garment readability.

---

# Affected Systems

```txt
lapels
collars
ties
outerwear readability
shadow separation
```

---

# Projection Dependencies

Projection systems define fabric realism.

---

# Affected Systems

```txt
pinstripes
checks
lapels
fabric continuity
seam continuity
```

---

# Shadow Dependencies

Shadow systems define structural depth.

---

# Affected Systems

```txt
lapel depth
overlap readability
fold realism
luxury softness
```

---

# Outline Dependencies

Outlines define silhouette readability.

---

# Affected Systems

```txt
edge continuity
garment separation
visual clarity
```

---

# Validation Dependencies

Validation depends on all upstream systems.

---

# Validation Targets

```txt
silhouette
overlap
projection
shadow
presentation
```

---

# Presentation Dependencies

Customer presentation depends on stable upstream rendering systems.

---

# Presentation Depends On

```txt
silhouette stability
projection quality
readable overlap
luxury realism
```

---

# Outerwear Dependencies

OUTER systems depend on:

```txt
MID structure
overlap readability
projection continuity
shadow continuity
```

---

# Failure Propagation Example

```txt
mannequin instability
↓
mask instability
↓
projection corruption
↓
shadow instability
↓
presentation degradation
```

---

# Final Principle

FIERO Fabric Simulator V2 depends on:

- stable foundations
- predictable relationships
- readable dependencies
- controlled iteration
- disciplined rendering architecture