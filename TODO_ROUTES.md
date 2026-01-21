# Route Corrections - TODO List

## Completed Tasks:

### 1. Fixed routes in `frontend/scripts/index.js`
- ✅ `../pages/index.html` → `index.html` (home is at root)
- ✅ `../pages/index.html` → `index.html`

### 2. Fixed routes in `frontend/scripts/pipeline.js`
- ✅ `../pages/contact.html` → `contact.html`
- ✅ `../pages/index.html` → `../index.html`
- ✅ `../pages/techstack.html` → `techstack.html`

### 3. Fixed routes in `frontend/scripts/desc.js`
- ✅ `contact.html` → `../pages/contact.html` (needs to go up one level)
- ✅ Added proper nextPage function

### 4. Fixed routes in `frontend/scripts/visualization.js`
- ✅ Added proper nextPage function with correct relative paths

### 5. Added missing script tag in `frontend/pages/desc.html`
- ✅ Added `<script src="../scripts/desc.js"></script>`

### 6. Added missing script tag in `frontend/pages/visualization.html`
- ✅ Added `<script src="../scripts/visualization.js"></script>`

---

## Route Summary:

### Root level (index.html):
- Navigation: `pages/*.html` (e.g., `pages/pipeline.html`, `pages/contact.html`)

### Pages folder (pipeline.html, visualization.html, desc.html, techstack.html):
- Home/Back: `../index.html`
- Sibling pages: `filename.html` (e.g., `techstack.html`, `contact.html`)
- Contact from desc.js: `../pages/contact.html`

