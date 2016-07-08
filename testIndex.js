"use strict";

const chai = require("chai");
const sinonChai = require("sinon-chai");
const chaiSubset = require("chai-subset");
// const sourceMapSupport = require("source-map-support");

const compilerOptions = require("./tsconfig.json").compilerOptions;
delete compilerOptions.lib;
compilerOptions.noEmitOnError = false;

require("ts-node").register({
    fast: true,
    noProject: true,
    compilerOptions: compilerOptions
});

chai.use(sinonChai);
chai.use(chaiSubset);
