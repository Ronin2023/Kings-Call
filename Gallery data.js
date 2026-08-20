/**
 * WAR ROOM GALLERY — DATA FILE
 * ---------------------------------------------------------------
 * This is the one place you edit to add a photo to the site.
 *
 * HOW TO ADD A PHOTO:
 *   1. Copy your image file into the /images folder in this project
 *      (e.g. images/team-1-victory.jpg).
 *   2. Add one entry to the GALLERY_IMAGES array below, pointing
 *      "src" at that file and writing a short "caption".
 *   3. Save, commit, and push to GitHub — no build step needed.
 *
 * If "src" is left empty (""), the gallery will render a styled
 * placeholder frame instead of a broken image, so it's safe to
 * plan out captions before the actual image files exist.
 * ---------------------------------------------------------------
 */

const GALLERY_IMAGES = [
  {
    src: "images/team-1-victory.jpg",
    caption: "Team 1 — GSD victory screen"
  },
  {
    src: "images/role-crest-priest.jpg",
    caption: "Support Priest deck, week 12"
  },
  {
    src: "images/cd-doctrine-board.jpg",
    caption: "Cost doctrine reference board"
  },
  {
    src: "",
    caption: "Add your own — edit js/gallery-data.js"
  }
];