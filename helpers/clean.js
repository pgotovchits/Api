"use strict";
const del = require("del");

del([
    "./common",
    "./portal/**",
    "./visitor/**",
    "./events/**",
    "./utils/**",
    "./index.*",
], { dot: true });