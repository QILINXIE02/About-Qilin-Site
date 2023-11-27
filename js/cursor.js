'use strict';
 
window.addEventListener("load", (event) => {
  new cursoreffects.ghostCursor();
});

const targetElement = document.querySelector("#ghost");
new cursoreffects.ghostCursor({ element: targetElement });
