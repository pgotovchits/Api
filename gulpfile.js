"use strict";
const gulp = require("gulp");
const del = require("del");

const { streamToPromise, runWithPromise } = require("@ramble/helpers/gulp/common");
const { compileTypescript, lintTypescript } = require("@ramble/helpers/gulp/typescript")("tsconfig.build.json");

const dotenv = require("dotenv");
dotenv.load({ silent: true });

let gulpWatchOpts = {};
if (process.env.VAGRANT) {
    gulpWatchOpts.usePolling = true;
    gulpWatchOpts.interval = 100;
}

gulp.task("clean", () => {
    return del("./compiled/**", { dot: true });
});

gulp.task("lint", async () => {
    return await lintTypescript("./src/**/*.ts", { since: gulp.lastRun("lint") });
});

async function copyExtenableError() {
    return streamToPromise(gulp.src("src/utils/ExtendableError.*", { base: "src/" }).pipe(gulp.dest("compiled/")));
}

gulp.task("typescript", async () => {
    await compileTypescript(true);
    await copyExtenableError();
});
/**
 * Watch typescript
 */
gulp.task("typescript:watch", () => {
    return new Promise(async () => {
        try {
            await runWithPromise("typescript", "lint");
        } catch (e) {
            // ignore
        }
        gulp.watch("src/**/*", gulpWatchOpts, async () => {
            try {
                await runWithPromise("typescript", "lint");
            } catch (e) {
                // ignore
            }
        });
    });
});

gulp.task("build", gulp.series("typescript", "lint"));
gulp.task("clean:build", gulp.series("clean", "build"));
