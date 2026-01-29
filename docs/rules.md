# SEI — Visual Rules

This document defines the **non-negotiable visual rules** of Sxnnyside Eloquent Icons (SEI).

These rules exist to protect consistency, clarity, and identity. They are not suggestions. Any icon that does not follow them does not belong to SEI.

---

## Design Intent

SEI icons are designed to be:

* clear at small sizes
* visually calm
* structurally consistent
* expressive without decoration

The goal is functional elegance, not visual noise.

---

## Grid System

* **Base grid:** 24 × 24 units
* **Content area:** optically centered
* **Alignment:** strict adherence to the grid

Icons must respect margins and negative space. Visual balance matters more than filling the canvas.

---

## Stroke

* Single, uniform stroke weight across the entire system
* Stroke aligned to the center of the path
* No variable stroke widths

Mixing stroke weights or using decorative strokes is not allowed.

---

## Caps and Joins

* **Stroke cap:** round
* **Stroke join:** round

Sharp joins or square caps introduce visual noise and are not permitted.

---

## Geometry and Curves

* Prefer simple, readable geometry
* Use smooth, controlled curves
* Avoid excessive detail

If a detail is not readable at 16px, it does not belong in the icon.

---

## Fill Usage

* Primary style: outline
* Filled shapes are allowed only when conceptually required
* Do not mix fill and stroke without semantic justification

Shape should communicate meaning before mass or color.

---

## Symmetry and Balance

* Prefer symmetry when the concept allows it
* Optical balance is more important than mathematical perfection

Icons should never feel tilted, heavy on one side, or unstable.

---

## Color

* Icons are designed as **monochrome assets**
* Color is defined by the consuming application

Do not encode meaning using color within the icon itself.

---

## Scalability

Every icon must remain clear and recognizable at:

* 16px
* 20px
* 24px
* 32px

Icons that fail at any of these sizes must be revised.

---

## Naming and Semantics

* Use short, universal, lowercase names
* One icon represents one concept

Correct examples:

* `lock`
* `user`
* `settings`

Incorrect examples:

* `secure_user_lock`
* `blue_settings_icon`

The name is part of the system design.

---

## Consistency Across the System

New icons must visually belong next to existing ones without explanation.

If an icon requires context to feel consistent, it needs refinement.

---

## Contribution Rule

All contributions are reviewed against this document.

Icons that break these rules will be rejected, regardless of effort or intent.

Consistency protects the system.

---

## Final Rule

> If an icon cannot naturally exist within the Sxnnyside ecosystem,
> it does not belong in SEI.

These rules do not limit creativity.
They give it direction.

— Sxnnyside Project
