# Male Mannequin Specification
# FIERO Fabric Simulator V2

---

# Overview

This document defines the official male production mannequin specification used throughout FIERO Fabric Simulator V2.

The male mannequin acts as the structural foundation for all menswear rendering systems.

---

# Core Principle

The mannequin remains fixed.

Garments create variation.

The body structure must remain stable across all renderer systems.

---

# Base Profile

## Ethnicity

```txt
Japanese
```

---

## Age Range

```txt
30 - 40
```

---

## Height

```txt
178cm
```

---

## Weight

```txt
70kg
```

---

## Shoulder Width

```txt
45cm
```

---

## Sleeve Length

```txt
61cm
```

---

## Neck

```txt
38cm - 39cm
```

---

## Chest

```txt
96cm - 100cm
```

---

## Waist

```txt
80cm - 82cm
```

---

## Hip

```txt
94cm - 96cm
```

---

## Inseam

```txt
78cm - 80cm
```

---

## Upper Arm (Bicep) Circumference

```txt
29cm
```

Slim arm circumference designed for clean layering.

Each garment sleeve naturally covers the layer beneath
when arms are intentionally kept slim on the base.

---

## Forearm Circumference

```txt
24cm
```

---

## Wrist Circumference

```txt
16cm
```

---

# Important Rules — Arm Structure

- Arms must remain naturally slim (NOT muscular, NOT thin)
- Bicep circumference is intentionally smaller than standard
  to support clean garment layering
- Forearm taper must remain natural and proportional
- Wrists must remain visible at sleeve end

---

# Body Philosophy

The mannequin should preserve:

- realistic luxury proportions
- elegant masculine balance
- natural tailoring silhouette
- stable layering compatibility

---

# Important Rules

- Extreme physiques are prohibited
- Unrealistic fashion-model proportions are prohibited
- Silhouette stability has highest priority

---

# Shoulder Structure

The shoulder structure must preserve:

- natural curvature
- tailoring readability
- stable lapel balance
- outerwear compatibility

---

# Important Rules

- Flat horizontal widening is prohibited
- Shoulder balance must remain anatomical

---

# Chest Structure

The chest should preserve:

- natural fabric drape
- realistic tailoring shape
- balanced silhouette flow

---

# Important Rules

- Hyper-muscular rendering is prohibited
- Unrealistic tightness is prohibited

---

# Waist Structure

The waist should remain:

- clean
- tailored
- naturally refined

---

# Important Rules

- Aggressive slimming is prohibited
- Silhouette balance has priority over exaggeration

---

# Leg Structure

Leg proportions should preserve:

- natural menswear balance
- realistic trouser drape
- elegant vertical silhouette

---

# Important Rules

- Overly skinny proportions are prohibited
- Leg balance must remain realistic

---

# Sleeve Structure

Sleeves must preserve:

- natural arm continuity
- stable outerwear expansion compatibility
- realistic tailoring flow

---

# Pose Specification

## Standard Pose

```txt
neutral standing
```

---

## Shoulder Position

```txt
natural relaxed balance
```

---

## Arm Position

```txt
5cm - 8cm away from torso
```

Sufficient clearance is required so that:

- hands do NOT touch or overlap the pants
- a clear silhouette gap is visible between arm and torso
- garment sleeve masks can be cleanly applied
- shirt cuff visibility (1-1.5cm) is preserved under jacket sleeves

---

## Hand Position

```txt
fully visible at sides
NOT touching pants leg
clear gap between hand and torso
fingers naturally relaxed and slightly separated
palms facing inward toward thighs
```

Hands must NEVER overlap with the pants silhouette.

This is critical for jacket, vest, and coat compositing.

---

## Leg Position

```txt
natural balanced stance
```

---

# Important Rules

- Pose structure must remain fixed
- Dynamic fashion posing is prohibited
- Pose consistency is required for mask stability

---

# Pose Consistency Strategy

Text prompts alone CANNOT guarantee identical pose
across multiple image generations.

The following workflow is required:

## Step 1 — Base Mannequin Generation

Generate the approved base mannequin ONCE using text prompt.

Regenerate until validation criteria are fully met.

Approved base mannequin becomes the master reference.

## Step 2 — All Subsequent Garment Generations

Every garment image must be generated using:

```txt
input: approved base mannequin image (reference)
prompt: "preserve identical figure, add only [garment]"
```

Text-only generation of garments is prohibited
(would produce pose drift).

## Step 3 — Multi-Generation Validation

Generate 3 to 5 candidates per garment.

Select the candidate with best alignment to base mannequin.

Reject candidates with detectable pose drift.

## Step 4 — Automated Drift Detection

Compare each garment image to the base mannequin
using contour difference scripts.

Maximum allowed drift: 2% of image dimensions
in any direction.

---

# Critical Rule

The base mannequin image is the source of truth.

If a garment image cannot be aligned to it,
the garment must be regenerated, not adjusted.

---

# Face Specification

## Style

```txt
established Japanese executive
CEO or founder presence
weight, gravitas, and quiet authority
NOT a young actor or model
NOT mid-management
```

---

## Age Appearance

```txt
40 years old
```

Age range: 38 to 42.

A mature executive presence is required.

Youthful or boyish appearance is prohibited.

---

## Skin

```txt
healthy natural skin tone
visible natural pores
minimal shine
no shaving marks
no makeup appearance
```

---

## Facial Hair

```txt
clean shaven
```

Or alternative:

```txt
neatly trimmed very short stubble
```

Beards and longer facial hair are prohibited.

---

## Eyebrows

```txt
thicker than average
defined and assertive
naturally groomed
slight downward angle at outer ends (gravitas)
```

---

## Eyes

```txt
double eyelids
looking straight at camera
dark brown iris
sharp intelligent gaze
slight intensity (NOT soft or dreamy)
steady, calm authority
```

---

## Nose

```txt
standard proportions
slightly defined bridge
masculine
```

---

## Mouth

```txt
closed firmly
no smile
slight downward neutral expression
suggests deliberation
```

---

## Jaw

```txt
defined and strong
slight squareness
no double chin
visible jaw line
```

---

## Cheeks

```txt
moderately full (NOT gaunt, NOT puffy)
slight maturity
```

---

## Aging Indicators

```txt
subtle eye-corner lines
faint horizontal forehead lines
very faint nasolabial start
small flecks of grey at temples (optional)
```

Late-30s to early-40s subtle aging required for credibility.

Youthful smoothness is prohibited.

---

## Distinguishing Marks

```txt
none
```

Moles, scars, tattoos, and visible birthmarks are prohibited
for consistency across all generations.

---

## Expression

```txt
established executive composure
quiet authority
deliberate stillness
serious without being severe
```

The face should evoke a CEO, company founder, or
senior executive — never a model, actor, or
mid-management figure.

---

# Important Rules

- Facial expression must not overpower garments
- Aggressive fashion expressions are prohibited
- Smiling expressions are prohibited
- Distinguishing marks are prohibited
- Face must remain consistent across all garment generations

---

# Hair Specification

## Style

```txt
clean
controlled
collar-safe
```

---

# Important Rules

- Hair must preserve collar readability
- Hair must not interfere with lapels

---

# Base Clothing Specification

## INNER Base

```txt
white short-sleeve V-neck t-shirt
minimal wrinkles
clean V-neckline (moderate depth)
sleeves ending at mid-bicep
sleeves must NOT extend below the elbow
```

Rationale:

The base mannequin wears a V-neck short-sleeve white t-shirt
so that all upper-layer garments can naturally cover the base
without showing the base neckline or base sleeve.

- V-neckline is chosen so that crew-neck long t-shirts and
  turtlenecks completely cover the base neckline.
- Short sleeves ending at mid-bicep guarantee that any
  long-sleeve upper layer fully covers the base sleeve.

Crew-neck base inners are prohibited because the base neckline
would peek through round-neck upper garments.

Long-sleeve base inners are prohibited because they risk
visible overflow under layered garments.

---

## Pants

```txt
neutral dark grey
clean silhouette
```

---

## Shoes

```txt
premium black calfskin dress shoes
cap-toe Oxford or plain-toe Derby style
matte to semi-matte finish (NOT glossy)
classic luxury craftsmanship appearance
```

Premium leather quality is required.

Glossy patent-leather finish is prohibited.

Cheap or plastic-looking shoes are prohibited.

Reference quality level: John Lobb, Edward Green,
Crockett & Jones, or equivalent.

---

# Approved INNER Colors

```txt
white
black
saxe blue
light gray
deep navy
beige
```

---

# Validation Rules

The mannequin must preserve:

- silhouette continuity
- overlap readability
- stable layering
- projection compatibility
- outerwear compatibility

---

# Critical Failure Conditions

```txt
shoulder imbalance
pose inconsistency
silhouette instability
lapel imbalance
outerwear collision
```

---

# Final Rule

The male mannequin defines the structural foundation of all menswear rendering systems inside FIERO Fabric Simulator V2.