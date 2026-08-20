# Changelog

All notable changes to **Sxnnyside Eloquent Icons (SEI)** are documented here.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Icon-request issue template, tailored to SEI's icon-first contribution workflow.

---

## [0.1.0] — 2026-08-19

First consolidated release. The outline set was fully audited and redesigned against SEI's own visual language rather than an unmodified third-party base; the filled set was rebuilt to use real transparency instead of hardcoded colors.

### Added

- 22 new outline icons, deduplicated against the existing set and against each other before inclusion.
- `docs/rules.md` visual language section: grid, stroke, corner treatment, and craft reference.
- Local dependency-free demo (`demo/`) — a Bun + htmx browser that reads `icons/outline` and `icons/filled` live off disk, with search, style toggle, theme toggle, and click-to-copy.

### Changed

- Rebuilt the entire outline set (previously an unmodified Feather Icons import) with original geometry consistent with SEI's own rules.
- Rebuilt all 23 filled icons to use true transparency (SVG `<mask>` or self-contained stroke/fill) instead of hardcoded `stroke="white"`, which only rendered correctly on white backgrounds.
- Standardized corner radii across all rect-based icons for consistent rounding.
- Resized several icons (`wifi`, `skull`, `close`, `check`, `add`, `back`) that were optically smaller than the rest of the set.

### Fixed

- `alert` and `warning` icons were pixel-for-pixel duplicates; markup unified.
- `download`/`install` and `upload`/`uninstall` were duplicate paths under different names; given distinct tray vs. app-icon metaphors.
- `exploit` was visually indistinguishable from `shield`/`verified`; `subscription` was indistinguishable from `credit-card`; `progress` rendered as a plain circle instead of a partial ring due to overlapping arc math.
- `debug` read as a generic crosshair/close icon; replaced with an unambiguous breakpoint-in-code glyph.

---

[Unreleased]: https://github.com/sxnnyside-project/sxnnyside-eloquent-icons/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/sxnnyside-project/sxnnyside-eloquent-icons/releases/tag/v0.1.0
