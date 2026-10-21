---
'@pharos-ds/core': patch
---

[feat] SideNavSection gains collapsible (true, or {defaultIsCollapsed, isCollapsed, onCollapsedChange}), mirroring SideNavItem: the title and subtitle become a native toggle button with a chevron, aria-expanded and aria-controls, endContent stays outside the button, and collapsed items are inert and aria-hidden behind the same grid-rows animation (instant under reduced motion); the section reflects data-collapsed. Ignored with isHeaderHidden or when the SideNav is collapsed to its icon rail; without the prop the DOM is unchanged
@Caio-Silvestre
