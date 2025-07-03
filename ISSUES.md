# Issues

## Implementation Plan & Technical Details

### Priority 1: Critical Visual Fixes

#### Main App Layout

- [ ] **Fix background edge issue**
  - **Problem**: White border around screen edges
  - **Solution**: Remove margin/padding from body, set background on html element
  - **Files**: `src/index.css`, `src/app.tsx`
  - **Implementation**: Add `body { margin: 0; }` and ensure background covers full viewport

#### Card Grid Layout

- [ ] **Add margin between cards**
  - **Problem**: Card borders are touching
  - **Solution**: Add consistent gap between cards in grid
  - **Files**: `src/components/CardGrid.tsx`
  - **Implementation**: Use `gap-4` class or equivalent spacing in flexbox/grid

#### Card Text & Readability

- [ ] **Responsive text sizing for card names/descriptions**
  - **Problem**: Text overflow with ellipsis truncation
  - **Solution**: Dynamic font sizing based on text length
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Create utility function to calculate font size based on text length
  - **Assumptions**:
    - Max 2 lines for card names
    - Max 4 lines for descriptions
    - Minimum readable font size of 10px
    - Use clamp() CSS function for responsive sizing

- [ ] **Remove text drop shadows**
  - **Problem**: Drop shadows reduce readability
  - **Solution**: Remove `drop-shadow` classes from text elements
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Remove shadow utilities from title and description text

### Priority 2: Card Visual Enhancements

#### Card Element Styling

- [ ] **Remove chunky borders from cost/attack/defense/rarity**
  - **Problem**: Thick borders on small elements look cluttered
  - **Solution**: Reduce border width or remove entirely
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Change from `border-2` to `border` or remove borders

- [ ] **Add padding around rarity/cost text**
  - **Problem**: Text too close to element edges
  - **Solution**: Increase padding for better visual spacing
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Use `px-3 py-2` or similar padding classes

- [ ] **Remove zoom effect from attack/defense/rarity on hover**
  - **Problem**: Inconsistent hover states
  - **Solution**: Remove transform scale on these elements
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Remove `hover:scale-*` classes from stat elements

- [ ] **Fix card image zoom trigger**
  - **Problem**: Image only zooms when hovering directly over image
  - **Solution**: Move hover state to parent card element
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Apply hover group class to card, image zoom on group-hover

- [ ] **Add margin between title/rarity and left border**
  - **Problem**: Text too close to card edge
  - **Solution**: Add left margin/padding
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Use `ml-2` or `pl-2` classes

- [ ] **Remove box shadow from attack/defense**
  - **Problem**: Unnecessary visual complexity
  - **Solution**: Remove shadow classes
  - **Files**: `src/components/Card.tsx`
  - **Implementation**: Remove `shadow-*` classes from stat elements

#### Typography

- [ ] **Use fun font for card descriptions**
  - **Problem**: Current font may be too serious
  - **Solution**: Add secondary font that's fun but readable
  - **Files**: `src/index.css`, `src/components/Card.tsx`
  - **Implementation**: Add Google Font like "Comfortaa" or "Nunito" for descriptions
  - **Assumptions**: Keep "Press Start 2P" for titles, use new font only for descriptions

### Priority 3: Content & Branding Changes

#### Header Updates

- [ ] **Remove "Household Heroes Collection" subtitle**
  - **Problem**: Redundant branding
  - **Solution**: Remove subtitle from header
  - **Files**: `src/components/Header.tsx`
  - **Implementation**: Remove or comment out subtitle element

- [ ] **Rename "Pixel Cards" to "Household Heroes"**
  - **Problem**: Inconsistent branding
  - **Solution**: Update main title text
  - **Files**: `src/components/Header.tsx`
  - **Implementation**: Change title text content

### Priority 4: Modal Enhancement

#### Card Detail Modal

- [ ] **Implement centered modal with backdrop blur**
  - **Problem**: Current modal may not have proper centering/backdrop
  - **Solution**: Create centered modal with dimmed background
  - **Files**: `src/components/CardDetail.tsx`, `src/app.tsx`
  - **Implementation**:
    - Use fixed positioning with backdrop blur
    - Center modal with flexbox
    - Add backdrop-blur-sm and bg-black/50 for dimming
    - Remove close button, handle click-outside and card-click to close
  - **Assumptions**:
    - Modal should be responsive (smaller on mobile)
    - Escape key should still close modal
    - Card should be larger in modal than in grid

## Testing Strategy

### Manual Testing Checklist

- [ ] Test responsive design at different screen sizes
- [ ] Verify text doesn't overflow at various text lengths
- [ ] Check hover states work correctly
- [ ] Test modal open/close functionality
- [ ] Verify accessibility (keyboard navigation, screen readers)

### Automated Testing

- [ ] Add visual regression tests for card layouts
- [ ] Test responsive text sizing function
- [ ] Add interaction tests for modal functionality

## Implementation Notes

### Technical Assumptions

- Using Tailwind CSS for styling
- Preact/React for component framework
- Current component structure will be preserved
- No breaking changes to Card data interface
- Maintain pixel art aesthetic throughout

### Dependencies

- May need to add new Google Fonts
- No new npm packages required
- All changes should be CSS/styling focused

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design required
- Support for CSS clamp() function (all modern browsers)

### Performance Considerations

- Minimize layout shifts during text resizing
- Ensure modal animations are smooth
- Optimize for mobile performance
