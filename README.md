# FIERO Fabric Simulator V2

## Vision

FIERO Fabric Simulator V2 is a layer-based fashion rendering architecture designed for realistic luxury tailoring presentation.

The system is built to simulate elegant custom tailoring using real fabric textures, structural garment layering, and stable rendering behavior.

V2 is not designed as a generic AI clothing generator.

It is designed as a practical fashion rendering engine specialized for:

- Custom tailoring
- Luxury menswear
- Elegant layering
- Realistic silhouette control
- Customer presentation
- Styling simulation

The primary goal is to create realistic and desirable customer-facing visuals while preserving tailoring balance and luxury atmosphere.

---

# Core Philosophy

The system prioritizes:

1. Realistic appearance
2. Realistic tailoring balance
3. Stable rendering structure
4. Natural garment overlap
5. Elegant silhouette preservation
6. Expandable rendering architecture
7. Fast customer presentation workflow

Luxury appearance is achieved through realism rather than artificial visual effects.

---

# Fundamental Rendering Concept

V2 is built on four foundational systems:

```txt
Fixed Body System
+
Layer System
+
Expansion System
+
Render Hierarchy
```

These four systems form the core rendering architecture of V2.

---

# Fixed Body System

The mannequin body remains fixed across the entire rendering system.

The following elements are treated as immutable production standards:

- Shoulder position
- Neck position
- Arm position
- Skeleton proportions
- Camera angle
- Lighting direction
- Body balance

The body acts as the stable rendering foundation.

Garments are rendered around the body rather than regenerating the entire human structure.

This prevents:

- silhouette instability
- collar collapse
- shoulder inconsistency
- overlap instability
- lighting inconsistency

---

# Layer System

Garments are rendered as structural layers.

V2 does not treat clothing as a single merged image.

Instead, garments are categorized into layered rendering groups.

---

# Layer Categories

## BASE

Fixed human structure.

Includes:

- face
- hair
- neck
- hands
- legs
- shoes
- body structure

---

## INNER

Body-contact garments.

Includes:

- long t-shirt
- shirt
- turtleneck

INNER garments remain close to the base body silhouette.

---

## MID

Primary silhouette-forming garments.

Includes:

- single jacket
- double jacket
- vest

MID layers create the main tailoring silhouette.

---

## OUTER

Outerwear layers.

Includes:

- chester coat
- trench coat
- overcoat
- balmacaan coat

OUTER layers expand outward from the MID silhouette.

Outerwear is not treated as a separate mannequin.

---

## ACCESSORY

Supporting layered accessories.

Includes:

- tie
- scarf
- watch
- glasses
- bag

---

# Expansion System

V2 separates:

```txt
Body Structure
and
Garment Expansion
```

The mannequin body remains fixed.

Garments expand outward using controlled rendering parameters.

---

# Expansion Parameters

## MID Layer Parameters

```txt
shoulder_expand
waist_shape
lapel_width
```

---

## OUTER Layer Parameters

```txt
coat_volume
coat_length
sleeve_extend
shoulder_expand
```

---

# Example

```txt
Base body shoulder: 45cm

Single jacket:
+1cm shoulder expansion

Coat:
+2cm shoulder expansion
+2cm sleeve extension
```

This creates realistic outer layering without rebuilding the mannequin structure.

---

# Render Hierarchy

Rendering priority is explicitly controlled.

V2 defines visual overlap behavior through structural rendering order.

---

# Standard Render Order

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

# Example

```txt
shirt
↓
tie_back
↓
jacket
↓
tie_front
↓
coat
```

This allows realistic:

- collar overlap
- tie positioning
- lapel depth
- outerwear layering

---

# Production Model Profile

## Standard Production Model

```txt
Ethnicity: Japanese
Age: 35-42
Height: 178cm
Weight: 70kg
Shoulder Width: 45cm
Sleeve Length: 61cm
Waist: 80-82cm
Neck: 38-39cm
```

---

# Appearance Rules

## Face

- clean
- intelligent
- neutral
- elegant
- non-aggressive

---

## Hair

- short
- collar-safe
- ears partially visible

---

## Expression

- neutral
- relaxed
- natural

---

# Rendering Neutrality

The mannequin must never overpower the garment presentation.

Priority order:

```txt
Garment
↓
Silhouette
↓
Fabric
↓
Human Presence
```

---

# INNER Layer Palette v1

Current approved INNER colors:

```txt
white
black
saxe blue
light pink
deep navy
beige
```

These colors were selected to preserve:

- luxury atmosphere
- tailoring realism
- layering compatibility
- customer presentation stability

---

# Current Development Phases

## Phase1 — Mens Core System

Includes:

- base mannequin
- shirt
- tie
- single jacket
- double jacket
- vest
- pants
- layer rendering structure

Goal:

Build a stable mens tailoring renderer.

---

## Phase2 — Ladies System

Includes:

- female silhouette system
- ladies jacket structure
- ladies waist shaping
- feminine layering adjustments

Goal:

Extend the renderer while preserving architectural consistency.

---

## Phase3 — Outerwear System

Includes:

- chester coat
- trench coat
- overcoat
- outer expansion rendering
- coat length adjustment
- outer collar hierarchy

Goal:

Create realistic luxury outer layering.

---

## Phase4 — Customer Experience System

Includes:

- presentation optimization
- luxury visual tuning
- customer comparison flow
- coat ON/OFF presentation
- styling switching
- final rendering polish

Goal:

Create a desirable customer-facing tailoring experience.

---

# Recommended Reading Order

To fully understand the V2 architecture, documents should be read in the following order.

---

## Step 1 — Vision & Philosophy

Read first:

```txt
README.md
```

Purpose:

Understand the core rendering philosophy and long-term direction of V2.

---

## Step 2 — Layer Architecture

Read:

```txt
docs/architecture/layer_architecture.md
```

Purpose:

Understand garment categories and structural layer responsibilities.

---

## Step 3 — Render Hierarchy

Read:

```txt
docs/architecture/render_hierarchy.md
```

Purpose:

Understand overlap behavior, render order, and garment interaction rules.

---

## Step 4 — Expansion System

Read:

```txt
docs/architecture/expansion_system.md
```

Purpose:

Understand how garments expand outward from the fixed mannequin structure.

---

## Step 5 — Base Mannequin Specification

Read:

```txt
docs/specs/base_mannequin_spec.md
```

Purpose:

Understand the fixed production mannequin system used throughout V2.

---

## Step 6 — Phase Documents

Read:

```txt
docs/phases/
```

Purpose:

Understand implementation scope, production boundaries, and development priorities.

---

# Important Principle

Do NOT begin implementation before understanding:

- Layer Architecture
- Render Hierarchy
- Expansion System

These systems define the foundation of the entire renderer.

---

# Recommended Understanding Flow

```txt
Vision
↓
Architecture
↓
Hierarchy
↓
Expansion
↓
Specifications
↓
Implementation
```

---

# Recommended Directory Structure

```txt
docs/

├ architecture/
├ specs/
├ phases/
├ masks/
├ guides/
├ vision.md
└ roadmap.md
```

---

# architecture/

Core rendering architecture documents.

Includes:

- layer architecture
- render hierarchy
- expansion system
- shadow system

---

# specs/

Production specifications.

Includes:

- mannequin specifications
- mens specifications
- ladies specifications
- outerwear specifications
- rendering rules

---

# phases/

Official implementation boundaries.

Includes:

- phase1_mens.md
- phase2_ladies.md
- phase3_outerwear.md
- phase4_customer_experience.md

---

# masks/

Structural mask definitions.

Includes:

- single open blueprint
- lapel rules
- overlap rules
- mask authoring rules

---

# guides/

Visual explanation materials.

Includes:

- layer diagrams
- overlap examples
- rendering flow charts
- presentation examples

---

# Important Rendering Rules

The system must prioritize:

- realistic tailoring balance
- stable silhouette rendering
- natural overlap behavior
- modular architecture
- repeatable rendering quality

Avoid:

- exaggerated AI effects
- unrealistic stretching
- unstable silhouette distortion
- unnecessary rendering complexity

---

# Long-Term Goal

The final goal of FIERO Fabric Simulator V2 is to create a practical luxury tailoring rendering engine capable of:

- realistic customer presentation
- elegant fashion simulation
- scalable garment layering
- stable fabric visualization
- luxury styling proposals

All future expansion must preserve the same rendering philosophy and structural stability.