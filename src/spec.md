# Specification

## Summary
**Goal:** Add a “Top 5 Most-Viewed Shorts” section that is editable via the frontend content data file and accessible from site navigation.

**Planned changes:**
- Add a new exported data structure in `frontend/src/content/channelContent.ts` containing exactly 5 Shorts items, each with `id`, `title`, `url`, and a displayable `views` label/value (with placeholder entries).
- Add a new on-page section titled “Top 5 Most-Viewed Shorts” with a stable anchor id (e.g., `id="shorts"`) that renders the 5 items as prominent clickable cards/links in the existing site style, ordered 1–5, opening in a new tab.
- Update the site header navigation (desktop and mobile) to include a “Shorts” in-page link that smoothly scrolls to the new section, preserving existing nav behavior and items.

**User-visible outcome:** Visitors can click “Shorts” in the header to jump to a new “Top 5 Most-Viewed Shorts” section and open any of the five Shorts links in a new tab, with each card showing the title and views text.
