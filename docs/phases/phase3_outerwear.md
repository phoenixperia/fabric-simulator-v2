# Phase3 Specification
# Outerwear System
# FIERO Fabric Simulator V2

---

# Overview

Phase3 defines the official outerwear rendering system for FIERO Fabric Simulator V2.

This phase introduces controlled outer silhouette expansion built on top of the stable MID layer structure established during earlier phases.

Phase3 is one of the most important architectural milestones in V2.

It transforms the renderer from:

```txt
tailoring renderer
```

into:

```txt
full layered fashion rendering system
```

---

# Core Goal

The goal of Phase3 is to establish:

- realistic outerwear layering
- controlled silhouette expansion
- coat rendering stability
- outer collar hierarchy
- luxury winter styling
- reusable outerwear structures

while preserving the fixed mannequin philosophy.

---

# Core Philosophy

Phase3 does NOT introduce separate mannequins.

Outerwear expands outward from the existing MID silhouette.

This is one of the most important principles in V2.

---

# Fundamental Structure

Phase3 rendering follows:

```txt
Fixed Body
+
INNER
+
MID
+
OUTER Expansion
```

The mannequin remains fixed.

The coat creates external volume.

---

# Important Philosophy

A coat must feel like:

```txt
a garment worn over tailoring
```

not:

```txt
a separate body
```

---

# Approved Outerwear

Phase3 officially includes:

```txt
chester coat
trench coat
overcoat
balmacaan coat
```

---

# Primary Rendering Goals

Phase3 focuses on:

- outer silhouette realism
- shoulder expansion
- coat depth
- sleeve extension
- coat length variation
- outer collar hierarchy
- luxury layering realism

---

# Outerwear Philosophy

Outerwear should preserve:

- elegance
- luxury balance
- tailoring readability
- silhouette continuity

Avoid exaggerated oversized distortion during initial implementation.

---

# Expansion Philosophy

Phase3 introduces controlled outward volume expansion.

Expansion is NOT simple scaling.

Expansion is structural silhouette growth.

---

# Correct Expansion Behavior

```txt
MID silhouette
↓
outward coat volume
↓
final OUTER silhouette
```

---

# Incorrect Expansion Behavior

```txt
horizontal stretching
```

This destroys realism.

---

# Shoulder Expansion System

## Recommended Range

```txt
+1.5cm ~ +3cm
```

---

# Goal

Shoulder expansion should create:

- coat depth
- layering realism
- winter volume
- elegant silhouette flow

---

# Important Rule

Shoulder expansion must preserve natural curvature.

Avoid flat horizontal widening.

---

# Sleeve Expansion System

## Recommended Range

```txt
+1cm ~ +3cm
```

---

# Goal

Sleeves should feel naturally layered over jackets.

The renderer must preserve:

- arm continuity
- sleeve realism
- coat depth
- natural drape flow

---

# Important Rule

Avoid hard sleeve transitions.

Sleeve layering must remain smooth and elegant.

---

# Coat Length System

## Purpose

Controls vertical silhouette variation.

---

# Recommended Adjustment Step

```txt
5cm increments
```

---

# Approved Length Types

```txt
short
standard
long
luxury long
```

---

# Important Rule

Length adjustments should primarily affect:

- lower silhouette
- hem structure
- vertical balance

Upper body proportions should remain stable.

---

# Collar Hierarchy

Phase3 introduces advanced collar layering.

---

# Standard Collar Flow

```txt
neck
↓
shirt collar
↓
tie knot
↓
jacket lapel
↓
coat collar
```

---

# Important Rule

Each layer must remain visually readable.

Avoid merged collar structures.

---

# Lapel Visibility

The renderer must preserve:

- jacket lapel readability
- coat collar readability
- V-zone depth
- layering realism

---

# Important Rule

OUTER layers must not completely destroy MID readability.

---

# Shadow Philosophy

Phase3 shadows should create:

- depth
- layering realism
- winter atmosphere
- luxury softness

---

# Important Rule

Avoid aggressive cinematic contrast.

The renderer should preserve elegant realism.

---

# Fabric Projection Goals

Phase3 fabric rendering must preserve:

- seam continuity
- shoulder continuity
- sleeve continuity
- vertical fabric flow
- coat depth realism

---

# Important Rule

Fabric realism must never damage silhouette readability.

Silhouette integrity has higher priority than texture complexity.

---

# Layer Relationships

Phase3 preserves the existing V2 architecture:

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
↓
OUTER_ACCESSORY
```

---

# Approved OUTER Accessories

```txt
outer scarf
winter gloves
outer bag
```

---

# Collision Prevention Goals

Phase3 must prevent:

- coat collar clipping
- lapel corruption
- sleeve collision
- silhouette collapse
- outer overlap instability

---

# Rendering Quality Standard

Phase3 should achieve:

```txt
stable luxury outerwear presentation
```

before pursuing:

```txt
advanced fashion layering
```

---

# Customer Experience Goals

Phase3 significantly improves customer visualization.

The renderer should support:

- jacket ON/OFF
- coat ON/OFF
- winter styling visualization
- luxury silhouette presentation

---

# Important Business Goal

Outerwear dramatically improves:

- luxury atmosphere
- styling realism
- purchase imagination
- winter presentation quality

---

# Completion Requirements

Phase3 is considered complete when:

- coat expansion is stable
- shoulder expansion is realistic
- collar hierarchy is stable
- sleeve layering is stable
- coat length adjustment is functional
- fabric projection is stable
- outer silhouette readability is stable

---

# Explicit Non-Goals

Phase3 does NOT attempt:

- extreme oversized fashion
- runway exaggeration
- dynamic physics simulation
- advanced scarf systems
- cinematic rendering
- complex casual layering

---

# Long-Term Compatibility

Phase3 architecture must support future expansion into:

- oversized coats
- down jackets
- layered winterwear
- scarves
- advanced seasonal systems
- luxury casual outerwear

without rebuilding the core renderer.

---

# Final Principle

Phase3 transforms V2 into a true layered fashion renderer.

The mannequin remains fixed.

The silhouette expands outward through controlled structural layering.

Luxury realism is achieved through:

- silhouette continuity
- outer expansion
- collar hierarchy
- render stability
- elegant layering behavior