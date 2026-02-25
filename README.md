# CORE UI Library

A design system showcase demonstrating CORE UI color tokens and components with light/dark theme support.

## Features

- **Color Palette Display**: Visual grid showing all CORE UI color tokens organized by color family
- **Badge Component**: HTML/CSS implementation of the CORE UI badge component with 11 color variants
- **Theme Support**: Automatic light/dark mode switching using CORE UI theme tokens
- **No Framework Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## Structure

- `index.html` - Main showcase page with tabs for Colors and Badge components
- `styles.css` - Component styles
- `compiled-themes.css` - Compiled CORE UI theme tokens (light and dark)
- `CORE UI Tokens/` - Source SCSS files for color definitions and themes

## Badge Variants

All badges use CORE UI semantic tokens that automatically adapt to light/dark themes:

- **Lime** - Success status
- **Pineapple** - Warning status
- **Apple** - Error status
- **Plum** - Info status
- **Slate** - Neutral status
- **Tangerine** - Supportive color
- **Watermelon** - Supportive color
- **Coconut** - Supportive color
- **Raspberry** - Supportive color
- **Elderberry** - Supportive color
- **Blueberry** - Supportive color

## Usage

Open `index.html` in a browser. Use the toggle switch to switch between light and dark modes.


## Colors 26 (New Palettes)

Palettes from new-colors.md, ordered lightest → darkest in each group:

| Palette | Light → Dark |
|---------|--------------|
| **Kermit** (Lime) | #F6FFEE, #B9EA93, #6DBD43, #318019, #2A4C1A, #284919, #162313 |
| **Animal** (Apple) | #FFF1F0, #E76468, #EA4858, #CD1829, #57191D, #2A1215, #4A1520 |
| **Scooter** (Pineapple) | #FFFBE7, #FEE494, #E6B146, #AD5F05, #594218, #2B2112, #3D2E0E |
| **Fozzy** (Coconut) | #FFF2E9, #FEBB99, #E67047, #CE391C, #582718, #2B1611, #3D1A12 |
| **Dr. Teeth** (Plum) | #F9F1FF, #D3AFF5, #A078D3, #5326A8, #2E1D49, #1A1325 |
| **Bunson** (Watermelon) | #F0FFFC, #8BE8DE, #3CBCB7, #1A7C7F, #174848, #112123, #0F3D3F |
| **Miss Piggy** (Raspberry) | #FFF0F6, #FEAED2, #DB549A, #C2247F, #541D3B, #291321, #3D1A2E |
| **Gonzo** (Elderberry) | #F0F0FE, #8B91F4, #6A88E1, #4444F4, #1D2854, #131629, #1A1B3D |
| **Uncle Deadly** (Slate) | #F5F7FA, #B3BDCB, #95A3B7, #5D7089, #2D3743, #141D29 |
| **Sweetums** (Coconut) | #FFF4F1, #F59E8A, #F08C44, #98270D, #683008, #2F0C04, #4A1508 |
| **Sam** (Blueberry) | #F0F6FF, #B7D7FF, #769BD6, #2D5696, #003270, #00183D, #001A3D |

## Rework
We need to create new variants with new colors. They need to change based light and dark mode. Create new color tokens and new themes to support the following. The bew colors are created based on the the new-colors.md file. We will create a new tab that cataegorizes these colors. 

We need to create a row for each of these icon variants under the Rework section. Text and Icon badges have soft and haevy color fills with an optional border.

Color options include:
- **Soft Color Fill** - Badges can have a soft/lighter color fill based
- **Heavy Color Fill** - Badges can have a heavy/darker color fill based
- **Color Text** - Badges can have color matching text or a different color shade or white depending on the background fill
- **Border** - Badges can have a 1px border that is a color contrast to the background fill
- **Icon Only 2 Variants** - Badges can have just an icon with a circle shape or square rectangle shape
- **Text Badges** - Text badges are in a rectangle shape that can I have an optional icon on the right


## Rework CSS Guide

Use this guide to help Cursor or Amazon Q understand how to create these badge concepts 

**Heavy Color Fill Light Mode** 
border: 1px solid  #B9EA93
background:  #318019
icon/circle  #B9EA93
text: color: #FFF;

**Soft Color Fill Light Mode**
border:  #B9EA93
background:  #F6FFEE
icon/circle fill: #318019 
text: #318019 


**Heavy Color Fill Dark Mode** 
border: 1px solid  #2A4C1A
background:  #6DBD43
icon/circle fill: #2A4C1A
text: #ffffff   


**Soft Color Fill Dark Mode**
border: 1px solid  #2A4C1A
background:  #162313
icon/circle fill: #6DBD43
text: #6DBD43 

### Rework Color Mapping (per palette)

| Palette | Soft Light (bg, border, text) | Heavy Light (bg, border, text) | Soft Dark | Heavy Dark |
|---------|------------------------------|--------------------------------|-----------|------------|
| **Kermit** | #F6FFEE, #B9EA93, #318019 | #318019, #B9EA93, #FFF | #162313, #2A4C1A, #6DBD43 | #6DBD43, #2A4C1A, #FFF |
| **Animal** | #FFF1F0, #E76468, #CD1829 | #CD1829, #E76468, #FFF | #2A1215, #4A1520, #E76468 | #E76468, #4A1520, #FFF |
| **Scooter** | #FFFBE7, #E6B146, #AD5F05 | #AD5F05, #E6B146, #FFF | #2B2112, #3D2E0E, #E6B146 | #E6B146, #3D2E0E, #FFF |
| **Fozzy** | #FFF2E9, #E67047, #CE391C | #CE391C, #E67047, #FFF | #2B1611, #3D1A12, #E67047 | #E67047, #3D1A12, #FFF |
| **Dr. Teeth** | #F9F1FF, #A078D3, #5326A8 | #5326A8, #A078D3, #FFF | #1A1325, #2E1D49, #A078D3 | #A078D3, #2E1D49, #FFF |
| **Bunson** | #F0FFFC, #3CBCB7, #1A7C7F | #1A7C7F, #3CBCB7, #FFF | #112123, #0F3D3F, #3CBCB7 | #3CBCB7, #0F3D3F, #FFF |
| **Miss Piggy** | #FFF0F6, #DB549A, #C2247F | #C2247F, #DB549A, #FFF | #291321, #3D1A2E, #DB549A | #DB549A, #3D1A2E, #FFF |
| **Gonzo** | #F0F0FE, #6A88E1, #4444F4 | #4444F4, #6A88E1, #FFF | #131629, #1A1B3D, #6A88E1 | #6A88E1, #1A1B3D, #FFF |
| **Uncle Deadly** | #F5F7FA, #95A3B7, #5D7089 | #5D7089, #95A3B7, #FFF | #141D29, #2D3743, #95A3B7 | #95A3B7, #2D3743, #FFF |
| **Sweetums** | #FFF4F1, #F08C44, #98270D | #98270D, #F08C44, #FFF | #2F0C04, #4A1508, #F08C44 | #F08C44, #4A1508, #FFF |
| **Sam** | #F0F6FF, #769BD6, #2D5696 | #2D5696, #769BD6, #FFF | #00183D, #001A3D, #769BD6 | #769BD6, #001A3D, #FFF |







