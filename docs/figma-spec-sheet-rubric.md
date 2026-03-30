# Figma Spec Sheet Generation Rubric

> Derived from live inspection of the Button spec sheet. Follow every rule here before writing any `use_figma` script.

---

## 1. Canvas & Sheet Frame

```
Sheet: VERTICAL auto-layout
  counterAxisSizingMode = 'FIXED'   → always resize(1400, sheet.height)
  primaryAxisSizingMode = 'AUTO'    → grows with content
  layoutSizingHorizontal = 'FIXED'  → must set BEFORE resize()
  itemSpacing = 0                   → sections are flush; dividers create gaps
  paddingLeft = paddingRight = 0    → sections own their own padding
  paddingTop = 0
  paddingBottom = 80
```

**Rule:** Set `layoutSizingHorizontal = 'FIXED'` BEFORE calling `resize()`. If not yet a child of an auto-layout parent, skip `layoutSizingHorizontal` — it will throw.

---

## 2. Sections

Every section is a direct child of the sheet.

```
Section: VERTICAL auto-layout
  counterAxisSizingMode = 'FIXED'   → resize(1400, 100) immediately after creation
  primaryAxisSizingMode = 'AUTO'    → grows with content
  paddingLeft = paddingRight = 64   → standard; use 48 for denser sections
  paddingTop = paddingBottom = 48
  itemSpacing = 24–32
  fills = [bg colour]
  cornerRadius = 0
```

**Rule:** Always call `resize(1400, 100)` right after setting `counterAxisSizingMode = 'FIXED'`. The `100` is a throwaway seed height; AUTO mode will recalculate.

**Rule:** NEVER set `layoutSizingHorizontal` on a section — sections are children of the sheet's VERTICAL auto-layout, so they don't need it.

---

## 3. Dividers

```javascript
const div = figma.createRectangle();
div.name = 'Divider';
div.resize(1400, 1);
div.fills = [{ type: 'SOLID', color: C.border }];
```

Dividers are direct children of the sheet, not of sections. They sit between sections at `itemSpacing = 0` on the sheet, so they always flush up.

---

## 4. Section Headers

```
SectionHeader: VERTICAL auto-layout
  primaryAxisSizingMode = 'AUTO'
  counterAxisSizingMode = 'AUTO'    ← HUG, never FIXED
  itemSpacing = 6
  fills = []
```

- Label text: 11px · Semi Bold · muted colour · `.toUpperCase()`
- Desc text: 12–13px · Regular · muted colour

**Critical rule:** Section headers use `AUTO/AUTO` sizing. Do NOT set a fixed width on them. The content determines the width. If descriptions are long, keep them short — one sentence max.

---

## 5. Text Nodes — The #1 Source of Bugs

### Default behaviour (safe)
`createText()` defaults to `textAutoResize = 'WIDTH_AND_HEIGHT'`. This means the node expands in both dimensions to fit content. It **never clips**. Use this for all labels, tags, descriptions, and single-line content.

### When you need wrapping text
If text must wrap at a specific width (e.g. inside a fixed-width card):

```javascript
const t = figma.createText();
t.fontName = { family: 'Inter', style: 'Regular' };
t.fontSize = 13;
t.characters = 'Long description text…';
t.textAutoResize = 'HEIGHT';   // ← fixed width, auto height
t.resize(300, t.height);       // ← set the desired wrap width
```

**Never do this:**
```javascript
t.resize(300, 20);  // ← clips text vertically
```

### Rules
1. Never set a fixed width on a text node unless you also set `textAutoResize = 'HEIGHT'`.
2. Never set fixed height on a text node — always let height be determined by content.
3. Never put a text node inside a `FIXED`-width container and expect it to wrap automatically — set `textAutoResize = 'HEIGHT'` on the text node explicitly.
4. `textAutoResize = 'WIDTH_AND_HEIGHT'` is correct for ALL single-line text (labels, tags, section titles).

---

## 6. Content Rows (Horizontal Groups)

```
Row: HORIZONTAL auto-layout
  primaryAxisSizingMode = 'AUTO'    → HUG
  counterAxisSizingMode = 'AUTO'    → HUG
  counterAxisAlignItems = 'MIN' | 'CENTER'  (choose per row)
  itemSpacing = 24–48
  fills = []
```

**Rule:** Rows are always HUG in both axes. They never have a fixed width. The section's FIXED 1400px width provides the container — rows just flow inside it.

---

## 7. Fixed-Size Display Items (Buttons, Inputs, etc.)

For component mockups that have explicit pixel dimensions:

```javascript
const btn = figma.createFrame();
btn.layoutMode = 'HORIZONTAL';
btn.primaryAxisAlignItems = 'CENTER';
btn.counterAxisAlignItems = 'CENTER';
btn.paddingLeft = btn.paddingRight = 16;
btn.paddingTop = btn.paddingBottom = 0;   // vertical centring via counterAxisAlignItems
btn.itemSpacing = 8;
btn.primaryAxisSizingMode = 'AUTO';       // width: HUG children
btn.counterAxisSizingMode = 'FIXED';      // height: explicit
btn.resize(btn.width || 80, 36);          // seed width, explicit height
```

**Rule:** For buttons/chips/badges: width = HUG (`AUTO`), height = FIXED. Never set both to FIXED unless the element has a defined fixed width (e.g. a table cell column).

**Rule:** Always provide a seed value (`|| 80`) when calling `resize()` on a frame whose `primaryAxisSizingMode = 'AUTO'` — the actual width will be recalculated, but Figma requires a valid number.

---

## 8. Data / Token Tables

Tables need fixed-width columns to stay aligned. The correct pattern:

```javascript
// Column widths defined upfront
const COL_WIDTHS = [300, 160, 400];  // total = 860 ≤ (1400 - 96 - 64 padding)

// Each row: HORIZONTAL auto-layout, AUTO/AUTO
// Each cell: FIXED width, AUTO height (HUG)
const cell = figma.createFrame();
cell.layoutMode = 'HORIZONTAL';
cell.primaryAxisSizingMode = 'FIXED';
cell.counterAxisSizingMode = 'AUTO';
cell.resize(COL_WIDTHS[i], 10);         // seed height, auto will recalculate
cell.paddingLeft = cell.paddingRight = 12;
cell.paddingTop = cell.paddingBottom = 10;
cell.itemSpacing = 0;

// Text inside the cell — MUST wrap if content is long
const t = txt(content, 12, color, style);
t.textAutoResize = 'HEIGHT';
t.resize(COL_WIDTHS[i] - 24, t.height);  // cell width minus L+R padding
cell.appendChild(t);
```

**Rule:** Sum of column widths + cell padding must not exceed `1400 - (section paddingLeft + paddingRight)`. For standard sections: `1400 - 128 = 1272px` available.

**Rule:** Text inside fixed-width cells must use `textAutoResize = 'HEIGHT'` so it wraps instead of overflowing.

---

## 9. Cards (A11y, Anatomy Parts, etc.)

```javascript
const card = figma.createFrame();
card.layoutMode = 'VERTICAL';
card.primaryAxisSizingMode = 'AUTO';     // height: HUG
card.counterAxisSizingMode = 'FIXED';    // width: explicit
card.resize(380, 10);                    // seed height
card.paddingLeft = card.paddingRight = 20;
card.paddingTop = card.paddingBottom = 16;
card.itemSpacing = 6;

// Text inside: must wrap
const title = txt('Title', 12, C.ink, 'Semi Bold');
// title uses default WIDTH_AND_HEIGHT — fine if short

const desc = txt('Longer description...', 12, C.subtle, 'Regular');
desc.textAutoResize = 'HEIGHT';
desc.resize(380 - 40, desc.height);  // card width minus L+R padding
card.appendChild(title);
card.appendChild(desc);
```

**Rule:** Cards have FIXED width, AUTO height. Text inside cards that may wrap MUST get `textAutoResize = 'HEIGHT'` and be resized to `(card width - horizontal padding)`.

---

## 10. Multi-Row Grids (No flexWrap)

Figma Plugin API does **not** support `flexWrap`. For grid layouts, build rows manually:

```javascript
// 6 items → 2 rows of 3
const items = [...];
for (let rowIdx = 0; rowIdx < 2; rowIdx++) {
  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.primaryAxisSizingMode = 'AUTO';
  row.counterAxisSizingMode = 'AUTO';
  row.counterAxisAlignItems = 'MIN';
  row.itemSpacing = 16;
  row.fills = [];
  for (let colIdx = 0; colIdx < 3; colIdx++) {
    row.appendChild(items[rowIdx * 3 + colIdx]);
  }
  section.appendChild(row);
}
```

---

## 11. layoutSizingHorizontal / Vertical — When to Use

These properties only work on nodes that ARE ALREADY children of an auto-layout parent.

```javascript
// ✅ Correct — set after appending to auto-layout parent
parent.appendChild(child);
child.layoutSizingHorizontal = 'FILL';

// ✅ Correct — use counterAxisSizingMode / primaryAxisSizingMode instead
child.counterAxisSizingMode = 'FIXED';
child.resize(1400, child.height);

// ❌ Wrong — setting layoutSizingHorizontal before append throws
child.layoutSizingHorizontal = 'FIXED';  // Error: node must be child of auto-layout
parent.appendChild(child);
```

**Rule:** Use `primaryAxisSizingMode` / `counterAxisSizingMode` directly on auto-layout frames. Only use `layoutSizingHorizontal` / `layoutSizingVertical` on children of auto-layout parents, and only after appending them.

---

## 12. Section Ordering & Insertion

Standard section order for a component spec sheet:

1. Header (title, subtitle, tags, hero preview)
2. *(Divider)*
3. Component (hero instance or clean showcase)
4. *(Divider)*
5. Variants
6. *(Divider)*
7. Sizes
8. *(Divider)*
9. States
10. *(Divider)*
11. Loading *(if applicable)*
12. *(Divider)*
13. Variants × States matrix
14. *(Divider)*
15. Anatomy
16. *(Divider)*
17. Icon Variants *(if applicable)*
18. *(Divider)*
19. Tokens
20. *(Divider)*
21. Accessibility

To insert a section at a specific index:
```javascript
sheet.insertChild(targetIndex, section);
sheet.insertChild(targetIndex, divider);  // divider goes BEFORE section at same index
```

---

## 13. Font Loading

Always load ALL fonts used before any `createText()` call:

```javascript
await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
await figma.loadFontAsync({ family: 'Inter', style: 'Semi Bold' });
await figma.loadFontAsync({ family: 'Inter', style: 'Bold' });
```

Only Inter (and other Google Fonts) work in the Plugin API. Cabinet Grotesk / Bricolage Grotesque are local fonts — use Inter as proxy in Figma, replace manually via Edit > Find/Replace Font.

---

## 14. Sizing Cheat Sheet

| Context | primaryAxisSizingMode | counterAxisSizingMode | Notes |
|---|---|---|---|
| Sheet | AUTO | FIXED | 1400px wide |
| Section | AUTO | FIXED | 1400px wide |
| Section header | AUTO | AUTO | width = content |
| Content row | AUTO | AUTO | width = content |
| Button/chip (w×h) | AUTO | FIXED | height explicit |
| Card | AUTO | FIXED | width explicit |
| Table row | AUTO | AUTO | — |
| Table cell | FIXED | AUTO | width explicit |
| Text (single line) | — | — | textAutoResize=WIDTH_AND_HEIGHT |
| Text (wrapping) | — | — | textAutoResize=HEIGHT, resize(w, h) |

---

## 15. Pre-flight Checklist

Before running any spec sheet script:

- [ ] All fonts loaded with `await figma.loadFontAsync`
- [ ] Sheet created with `counterAxisSizingMode='FIXED'` + `resize(1400, 100)` before children added
- [ ] Every section: `counterAxisSizingMode='FIXED'` + `resize(1400, 100)` immediately after creation
- [ ] No `layoutSizingHorizontal` set before the node is appended to its parent
- [ ] No `flexWrap` (not supported)
- [ ] All wrapping text uses `textAutoResize='HEIGHT'` and `resize(width, height)`
- [ ] Token table column widths sum ≤ `1400 - (2 × section padding)`
- [ ] No `vectorPaths` with `A` (arc) commands — use cubic bezier `C` or ellipse `arcData`
- [ ] `combineAsVariants` components are pre-positioned in a grid before combining
- [ ] Sheet final width verified: `Math.round(sheet.width) === 1400`
