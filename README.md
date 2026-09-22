# TENRM Lab Game Library

A responsive Thai/English website based on the supplied game documents. All website files are contained in this subfolder; original files in the parent folder are unchanged.

## Open the website

Open `index.html` directly in a browser. No installation or build is required. For local development, run `python3 -m http.server 5173` from this folder and open http://localhost:5173.

## Features

- Eleven game records with searchable Thai and English names, themes and descriptions.
- Five editorial topic filters, alphabetical sorting and persistent language preference.
- Individual game URLs, section navigation, image enlargement and printable guides.
- Original DOCX downloads and the complete combined appendix.
- Responsive layouts, keyboard navigation, reduced-motion support and an accessible image dialog.
- No external fonts, analytics, CDN requests, services or runtime dependencies.

## Content and provenance

The eleven individual Word files are the content sources. Document 12 is a compilation and is provided as a download rather than counted as another game. Thai paragraphs and table text are extracted from the documents. English content is an edited reading guide under each primary heading, not a verbatim translation of every table or card. Original image text remains unchanged. The full Thai documents remain the authority for detailed conditions and print layouts.

No player counts, durations or research titles have been invented for blank fields. Game 06 has a blank title field; its title is taken from its overview and filename. Game 07 has no research title, player count or duration. The five topic categories and short introductions are editorial navigation aids. Some original checkbox symbols are ambiguous, so game formats are not inferred from those symbols. Separate Excel files and print kits mentioned in the documents were not supplied.

This is a repository of facilitated educational games, not digital recreations of the games. The site is configured for GitHub Pages. The original Word documents are distributed separately through the `learning-materials` GitHub release to keep the website within hosting size limits. Source ownership and reuse permissions remain with their authors; no new license is applied to the supplied materials.

## Files

- `index.html`, `styles.css`, `app.js`: website interface.
- `content-en.json`: editable English guides and catalog metadata.
- `data.js`: generated bilingual website data.
- `source-data.json`: extracted source paragraphs and image inventory.
- `assets/`: original extracted media and optimized catalog thumbnails.
- `documents/`: copies of the supplied Word documents.
- `scripts/extract.py`: extracts source text/media and copies documents.
- `scripts/build.py`: preserves Thai paragraph/table content and builds browser data. Requires Pillow.

To regenerate after updating source files, run the extraction script and then the build script. Review English guides manually when source content changes; translations are not generated automatically. The builder uses the eleven individual sources and discards duplicate extracted images from the compilation.

## Validation

Browser checks cover both languages, all game routes, filters, search, sorting, downloads, section links, image enlargement, reload persistence, mobile layout and missing routes. See `scripts/check.cjs` for the automated checks.

## GitHub publishing

Repository: https://github.com/gamerepocu/gamerepocu

Planned site URL: https://gamerepocu.github.io/gamerepocu/

Serve the `main` branch root with GitHub Pages. `.nojekyll` disables Jekyll processing. Publish the twelve original Word documents as `01.docx` through `12.docx` in the `learning-materials` release. On the GitHub Pages domain, download buttons point to those release assets; local previews still use `documents/`. The publishing repository excludes `documents/` because two files exceed GitHub’s regular file-size limit.
