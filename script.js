"use strict";

// The site remains fully usable when JavaScript is disabled.
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
