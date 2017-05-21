"use strict";
const del = require("del");

del([
    "./actions/**",
    "./events/**",
    "./utils/**",
    "./index.*"
], { dot: true });