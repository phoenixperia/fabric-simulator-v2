# Phase1 Specification
# Mens Core System
# FIERO Fabric Simulator V2

---

# Overview

Phase1 defines the foundational menswear rendering system for FIERO Fabric Simulator V2.

This phase establishes the core rendering architecture required for all future expansion.

The primary goal is stability.

Not complexity.

Phase1 focuses on building a stable and reusable mens tailoring renderer.

---

# Core Goal

The goal of Phase1 is to establish:

- stable silhouette rendering
- stable layering behavior
- reusable mask architecture
- realistic tailoring balance
- reliable fabric projection
- stable overlap behavior

Phase1 becomes the structural foundation for:

- ladies systems
- outerwear systems
- oversized rendering
- future garment expansion

---

# Important Philosophy

Phase1 is NOT focused on feature quantity.

Phase1 is focused on:

```txt
stability
consistency
structural realism
```

The renderer must remain predictable and modular.

---

# Approved Garments

Phase1 officially includes:

```txt
single open jacket
single closed jacket
double closed jacket
vest
pants
shirt
tie
```

---

# Approved INNER Types

```txt
long t-shirt
shirt
turtleneck
```

---

# Approved INNER Colors

```txt
white
black
saxe blue
light pink
deep navy
beige
```

---

# Approved MID Garments

## Single Open Jacket

Primary implementation target.

Acts as the foundational jacket structure.

---

## Single Closed Jacket

Derived from Single Open structure.

Maintains the same silhouette foundation.

---

## Double Closed Jacket

Derived from MID layer overlap expansion.

Introduces front overlap complexity.

---

## Vest

Simplified MID structure.

Maintains inner silhouette continuity.

---

# Approved Bottom

## Pants

Phase1 pants remain structurally simple.

Focus areas:

- silhouette stability
- crease realism
- clean fabric projection
- natural taper balance

---

# Approved Accessories

## Tie

The tie system uses split-layer rendering.

---

# Tie Structure

```txt
tie_back
tie_front
```

---

# Reason

The tie passes:

- behind the jacket
- in front of the jacket

This requires separate render layers.

---

# Core Technical Goals

Phase1 must establish:

```txt
Fixed Body Stability
+
Layer Stability
+
Mask Stability
+
Fabric Stability
```

---

# Layer Targets

## INNER

Stable neck structure.

---

## MID

Stable tailoring silhouette.

---

## ACCESSORY

Stable tie hierarchy.

---

# OUTER Exclusion

Phase1 does NOT include outerwear.

Outerwear is reserved for Phase3.

---

# Important Philosophy

Phase1 must build a stable MID silhouette before introducing OUTER expansion systems.

---

# Primary Rendering Focus

Phase1 prioritizes:

- shoulder balance
- lapel structure
- V-zone realism
- silhouette continuity
- sleeve continuity
- front panel stability

---

# Primary Mask Targets

The following masks are considered critical:

---

## Jacket Masks

```txt
front_panel
lapel
inner_open_area
button_zone
hem
side_body
```

---

## Sleeve Masks

```txt
upper_sleeve
lower_sleeve
cuff_zone
```

---

## Collar Masks

```txt
shirt_collar
lapel_roll
neck_zone
```

---

## Tie Masks

```txt
tie_back
tie_front
tie_knot
```

---

# Fabric Projection Goals

Phase1 fabric rendering must preserve:

- weave continuity
- stripe continuity
- lapel alignment
- sleeve continuity
- shoulder realism

---

# Important Rule

Fabric realism must NEVER break silhouette stability.

Silhouette integrity has higher priority than fabric detail.

---

# Shadow Goals

Phase1 shadows should remain:

- soft
- shallow
- controllable
- reusable

---

# Important Rule

Avoid permanently baked shadow structures whenever possible.

---

# Camera Stability

Phase1 requires fully fixed:

- mannequin
- pose
- camera
- lighting
- crop

---

# Important Rule

Changing body structure invalidates:

- masks
- overlap systems
- shadow systems
- fabric projection alignment

---

# Collision Prevention Goals

Phase1 must prevent:

- lapel clipping
- tie collision
- collar collapse
- sleeve corruption
- silhouette instability

---

# Silhouette Goals

The renderer should preserve:

- elegant tailoring balance
- luxury proportions
- natural shoulder flow
- clean waist shaping
- readable lapel structure

---

# Rendering Quality Standard

Phase1 should achieve:

```txt
stable luxury tailoring presentation
```

before pursuing:

```txt
advanced realism
```

---

# Completion Requirements

Phase1 is considered complete when:

- single open jacket is stable
- single closed jacket is stable
- double jacket overlap is stable
- tie hierarchy is stable
- fabric projection is stable
- lapel rendering is stable
- silhouette continuity is stable
- mask reuse is functional

---

# Explicit Non-Goals

Phase1 does NOT attempt:

- oversized rendering
- outerwear rendering
- scarf systems
- advanced casualwear
- dynamic posing
- advanced AI correction
- complex layered styling

---

# Long-Term Compatibility

Phase1 architecture must support future expansion into:

- ladies systems
- outerwear systems
- oversized tailoring
- seasonal layering
- advanced fabric systems

without rebuilding the renderer core.

---

# Final Principle

Phase1 defines the structural heart of V2.

Stability comes first.

Elegance comes second.

Complexity comes later.