# Color Direction Documentation

## Overview

This project uses a **neutral-first, brand-atmosphere-driven** color strategy designed for:

- Authentication-focused UI
- High contrast and clarity
- Commercial reusability
- Coding-first implementation

Color decisions prioritize **action discoverability** and **visual hierarchy** over decoration.

---

## Core Philosophy

- Color is used intentionally, not decoratively
- Only one primary action color exists per screen
- Brand atmosphere and interaction colors are separated
- Contrast is achieved through hue and luminance, not shadows

---

## Color Roles

### Primary Action Color

**Wisteria Blue — `#7f95d1`**

**Purpose**

- Represents interaction and action
- Chosen to provide strong contrast against pink-based gradient backgrounds

**Usage**

- Primary buttons (Login, Register, Submit)
- Main call-to-action elements
- Critical interactive states

**Rules**

- Must be visually dominant among interactive elements
- Must not be used for decorative backgrounds
- Must not be mixed with other action colors on the same screen

---

### Brand / Atmospheric Accent

**Bubblegum Tint — `#ff82a9`**

**Purpose**

- Defines brand mood and friendliness
- Provides emotional tone without competing with actions

**Usage**

- Gradient backgrounds
- Decorative highlights
- Brand emphasis elements
- Non-interactive visual areas

**Rules**

- Never used for primary CTAs on pink or blush backgrounds
- Must not be relied upon for interaction affordance
- Can be used for subtle accents only when contrast is preserved

---

### Supporting / Soft Accent

**Powder Blush — `#ffc0be`**

**Purpose**

- Soft visual support
- Transitional or calming surface color

**Usage**

- Gradient blends
- Secondary background layers
- Subtle UI separation

**Rules**

- Not used for text or interactive elements
- Used only in low-contrast, non-critical areas

---

### Decorative / Neutral Soft Background

**Soft Blush — `#ffebe7`**

**Purpose**

- Gentle background tone for non-form areas

**Usage**

- Visual panels
- Empty states
- Carousel or illustration containers
- Decorative-only sections

**Rules**

- Not used as a base for primary forms
- Must not contain critical interactions without contrast support

---

### Neutral Base Colors

**White — `#ffffff`**  
**Black — `#000000`**

**Purpose**

- Readability and structural clarity

**Usage**

- Text
- Form containers
- Neutral surfaces
- Layout foundations

**Rules**

- Forms should remain neutral whenever possible
- Text contrast must always meet accessibility standards

---

## Background Strategy

- Pink-based gradients are used as **visual atmosphere only**
- Form areas should be visually separated or clearly layered
- Interactive elements must not rely on gradient contrast alone
- Gradient dominance ratio (approx. 30% / 70%) is acceptable for brand panels

---

## Accessibility Considerations

- Color is never the sole indicator of meaning
- Action colors must maintain sufficient contrast against their background
- Interactive elements must remain distinguishable in both light and dark modes
- Pink tones are not used for error/success states by default

---

## Interaction Rules (Hard Constraints)

- Only one primary action color per screen
- Brand colors must not compete with action colors
- Contrast must be visible without hover or animation
- Decorative colors must never imply interactivity

---

## Summary

- **Blue acts**
- **Pink sets the mood**
- **Neutrals keep it readable**

This separation ensures clarity, scalability, and commercial viability.
