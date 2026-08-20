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
* **Live area:** 2px margin on all sides (icon mass sits inside a 20×20 optical square, corners of that square may be touched by rounded forms)
* **Content area:** optically centered — verify by eye, not just by bounding-box math
* **Alignment:** strict adherence to the grid

Icons must respect margins and negative space. Visual balance matters more than filling the canvas.

---

## Stroke

* Single, uniform stroke weight across the entire system: **2px** at the 24×24 grid
* Stroke aligned to the center of the path
* No variable stroke widths, no decorative strokes

---

## Caps, joins and corner treatment — SEI's defining trait

This is what separates SEI from a generic line-icon set (e.g. Feather) and is the main lever for a MingCute-comparable finish:

* **Stroke cap:** round
* **Stroke join:** round
* **Rounded rectangles, not sharp ones.** Every `rect`-based icon uses `rx` proportional to its size — small containers (badges, keys, chips) use a generous radius (≈3–4 on a ~16–20 unit box), large containers (cards, panels, screens) use a smaller relative radius (≈2–2.5). A sharp 90° corner should basically never appear in SEI.
* **Circles and arcs are drawn as true circles/arcs**, not approximated with short line segments (no polygons pretending to be curves).
* **Terminals read as capsules.** Where Feather-style source paths taper a shape to a point or a hard corner, SEI resolves it into a soft radiused end — this is the single biggest visual difference from the current (unmodified Feather) set.

Sharp joins or square caps introduce visual noise and are not permitted.

---

## Geometry and Curves

* Prefer simple, readable geometry — 1 to 3 sub-shapes per icon is the target; if a concept needs more than 4, simplify the concept, not just the rendering
* Use smooth, controlled curves — every curve should be describable as an arc or a simple 2-point Bézier, not a dense multi-point path
* Avoid excessive detail and avoid "assembled" geometry (shapes that read as several unrelated primitives glued together rather than one resolved silhouette)
* Prefer icons built from a small vocabulary of consistent primitives (circle, rounded rect, capsule, simple arc) reused across the set — this is what makes a collection feel authored rather than scavenged

If a detail is not readable at 16px, it does not belong in the icon.

---

## Filled variants

* Single fill only: `fill="currentColor"`, no `stroke`. Never hardcode a second color (e.g. `stroke="white"`) for inner details — it only reads correctly on a white background and breaks on dark mode, colored surfaces, or any non-white consuming app.
* Inner details (the check inside a circle, the dot under an "i") are cut as **true geometric holes** — real transparency, correct on any background. Build the hole shapes as simple primitives (`rect`, `circle`, straight bars via `rotate()` transforms) inside an SVG `<mask>` rather than hand-computing ribbon polygons — far more reliable and exactly reproducible.
* A hairline stroke mark (like a checkmark) becomes a thin filled bar shape when used as a hole — slightly thicker than a 2px stroke, which is the standard treatment in professional filled icon sets (Material Symbols, etc.), not a flaw.
* `<mask>` is standard SVG and renders correctly on web and in `flutter_svg`. For SwiftUI (which needs a flattened PDF/vector asset, not live SVG), flatten the mask at export time — same requirement as any complex SVG feature ported to that platform.
* Not every outline icon needs a filled counterpart — only add one when the product genuinely uses a filled/selected state for that icon.

## Craft reference

MingCute Icons is SEI's reference for **craftsmanship**, not for design: study its rounded geometry, stroke treatment, curve resolution, terminal handling, proportion, spacing and cross-icon consistency. Never copy a MingCute path or silhouette directly — every SEI shape must be authored from scratch for SEI's own concepts.

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
