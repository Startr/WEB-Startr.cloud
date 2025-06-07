# Startr.Cloud TODOs

## [Legal] TODOs
- [x] **Merge TOS into Terms**: Consolidate old TOS.md content with new terms.md
  - [x] Review and merge content from src/TOS.md into src/policies/terms.md
  - [x] Ensure merged terms make logical sense and are consistent
  - [x] Update footer navigation to point to /policies/terms instead of /tos
  - [x] Remove old src/TOS.md file
  - [x] Test that new terms page renders correctly
  - [x] Verify all links work properly


## [Styling/Content Review] TODOs
- [ ] **Review CSS Classes in support.njk**: Investigate `space-bottom--xxx-large` and `space-top--xxx-large` classes in `src/support.njk` (line 130) for appropriate usage or if they are placeholders.
    - [ ] Likely remove and migrate to https://startr.style styling as per our conventions. 

## [Content & Structure] TODOs
- [ ] **Review `src/code-of-conduct.md`:** Ensure it's current and appropriately linked.
- [ ] **Review `src/assets/about.txt`:** Update or remove placeholder content.
- [ ] **Optimize Images:**
    - [ ] Ensure optimal web formats and sizes for logos (`logo.png`, `logo.webp`). Remove `logo.xcf` from assets? Maybe but it's good for canonical access and for creating new ones.. 
    - [ ] Review and optimize other images in `src/assets/` and `src/img/`.
- [ ] **Review Policy Pages:** Check `src/Contact-Us.md`, `src/Cookie Policy.md`, `src/Privacy-Policy.md`, `src/policies/refund.md`, `src/policies/security.md`, `src/policies/terms.md` for completeness and ensure they are linked.
- [ ] **Clarify `src/job/` Content:** Determine if `.md` files in `src/job/` (e.g., `sweat-equity-offer-template.md`) should be pages or downloadable resources.
- [ ] **Clean `src/posts/` Directory:** Remove backup files ending in `~`.
- [ ] **Review `src/support/classes/upcoming.json`:** Ensure data structure is optimal and the "upcoming classes" feature is implemented or planned.
- [ ] **Assess `src/test/image.jpeg`:** Determine if this test asset is still needed.


## [Build & Config] TODOs
- [ ] **Standardize Package Manager:** Review `bun` vs `npm`/`npx` usage across `README.md`, `package.json`, and `netlify.toml`. Choose one and update all scripts and documentation.
    - `bun` for all local dev at this point 
    - `npx` for deplyment on cdns
- [ ] **Test `package.json` Scripts:** Verify all scripts (`test`, `start`, `build`, `buildfresh`, `srvsrc`, etc.) are functional. Implement actual tests for the `test` script.
- [ ] **Investigate/Remove `startr_src` Scripts:** Clarify the purpose of `startstartr`, `buildstartr`, etc. in `package.json` and remove if they reference a non-existent `startr_src` or are legacy.
- [ ] **Update Dependencies:** Check `package.json` for outdated dependencies and update them, ensuring compatibility.
- [ ] **Refine Eleventy Passthrough Copies:** In `src/eleventy.config.js`, make file passthrough copy rules more specific to avoid copying unnecessary files to `dist`.
- [ ] **Review Eleventy Plugins:** Ensure all Eleventy plugins are used effectively and configured optimally in `src/eleventy.config.js`.


## [Netlify] TODOs
- [ ] **Monitor Lighthouse Reports:** Regularly check reports in `reports/lighthouse/index.html` against thresholds in `netlify.toml`.
- [ ] **Review `Access-Control-Allow-Origin` Header:** In `netlify.toml`, assess if the `Access-Control-Allow-Origin = "*"` header can be made more restrictive.
