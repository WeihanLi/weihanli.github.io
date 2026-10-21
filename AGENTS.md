# Agent Instructions

## Project model

- This is a standalone personal portfolio deployed as a static GitHub Pages site. The `main` branch's repository root is the publishing source.
- `index.html` is the complete application: semantic HTML content, the responsive CSS, and the small inline JavaScript footer-year update all live in that file. There are no components, build outputs, package manifests, frameworks, or local asset directories.
- External resources are limited to the Google Fonts stylesheet referenced in `<head>`; project, blog, and social links are direct external URLs in the page markup.

## Commands

- No build, test, or lint commands exist, and no dependencies need installation.
- For local review, open `index.html` in a browser or serve the repository root with a static server, for example:

  ```powershell
  python -m http.server 8000
  ```

  Then browse to `http://localhost:8000/`. There is no automated or single-test command.

## Editing conventions

- Make portfolio content, navigation anchors, and external links consistent within `index.html`. Navigation links target section `id` values such as `#work`, `#focus`, and `#writing`; update both sides if a section is renamed.
- Keep the page self-contained: place CSS in the existing `<style>` block and only add JavaScript when it is small and page-specific. Do not introduce a build tool or framework for a content/style change.
- Reuse the existing CSS custom properties in `:root` and the established layout classes (`.wrap`, `.section`, `.section-head`, card grids) instead of adding one-off visual values or duplicate responsive rules.
- Preserve the site’s dark design system, Manrope/DM Mono typography pairing, compact inline CSS format, and the existing `max-width: 800px` responsive breakpoint. Add responsive behavior alongside the existing media query when a layout changes.
- External links that open a new tab use `target="_blank"` with `rel="noreferrer"`. Keep that pairing for new external links.
- The footer year is set dynamically by the inline script; do not replace it with a static year.
