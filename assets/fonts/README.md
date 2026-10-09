# Fonts for generated images

These TrueType files are used only by `lib/og.js` to render Open Graph share images at build time.
The website itself loads its fonts through `next/font` in `app/layout.js`.

| File | Family | License |
| --- | --- | --- |
| `Piazzolla-Medium.ttf` | [Piazzolla](https://fonts.google.com/specimen/Piazzolla) (static 500 instance) | SIL Open Font License 1.1 |
| `Poppins-Regular.ttf` | [Poppins](https://fonts.google.com/specimen/Poppins) | SIL Open Font License 1.1 |
| `Poppins-SemiBold.ttf` | [Poppins](https://fonts.google.com/specimen/Poppins) | SIL Open Font License 1.1 |

The `GSUB` table was removed from each file because the image renderer cannot parse some of its
OpenType substitution lookups. Ligatures and contextual alternates are not needed in share images.
