# GiftOnScreen Templates

This repository stores template bundles for the GiftOnScreen platform.

## Directory Structure

```
templates/
├── {template-slug}/
│   ├── v1/
│   │   ├── bundle.zip        # Complete template bundle
│   │   ├── schema.json       # Template configuration schema
│   │   └── thumbnail.webp    # Preview thumbnail
│   └── v2/
│       └── ...
```

## Bundle Contents

Each template bundle should include:
- `index.html` - Main template HTML
- `style.css` - Template styles
- `app.js` - Template JavaScript
- `schema.json` - Gift data schema configuration
- `thumbnail.webp` - Preview image

## Example Template

See the `example` template in this repository for a complete reference.