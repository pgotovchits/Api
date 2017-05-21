"use strict";
const del = require("del");

del([
    "./common",
    "./actions/**",
    "./events/**",
    "./utils/**",
    "./index.*",
    // Shorthand imports for specific API version
    "./1.*",
    "./2.*",
    "./3.*"
], { dot: true });