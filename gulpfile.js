"use strict";

const fs = require("fs");
const path = require("path");

const gulp = require("gulp");
const gutil = require("gulp-util");
const gulpSourcemaps = require("gulp-sourcemaps");
const del = require("del");
const ts = require("gulp-typescript");
const gulpMocha = require("gulp-mocha");
const tslint = require("gulp-tslint");
const typescript = require("typescript");
const merge = require("merge2");


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

gulp.task("lint", () => {
    return gulp.src("./src/**/*.ts", { since: gulp.lastRun("lint") })
        .pipe(tslint({ tslint: require("tslint"), formatter: "verbose" }))
        .pipe(tslint.report());
});

const tsProject = ts.createProject("tsconfig.build.json", {
    typescript: typescript,
    noEmitOnError: true,
    noEmit: false
});

/**
 * Compile typescript files
 */
gulp.task("typescript", () => {
    const tsResult = tsProject.src()
        .pipe(gulpSourcemaps.init())
        .pipe(tsProject())
        .once("error", function () {
            this.once("finish", () => process.exit(1));
        });

    return merge([
        gulp.src(["src/utils/ExtendableError.*"], { base: "src/" }).pipe(gulp.dest("compiled/")),
        tsResult.js.pipe(gulpSourcemaps.write(
            '.',
            {
                includeContent: false,
                sourceRoot: function (file) {
                    return path.join(path.relative(file.path, './src'), 'src')
                }
            }))
            .pipe(gulp.dest('./compiled')),
        tsResult.dts.pipe(gulp.dest("./compiled"))
    ]);
});
/**
 * Watch typescript
 */
gulp.task("typescript:watch", gulp.series("typescript", "lint", () => {
    gulp.watch("src/**/*", gulpWatchOpts, gulp.parallel("typescript", "lint"));
}));

gulp.task("build", gulp.series("typescript", "lint"));
gulp.task("clean-build", gulp.series("clean", "build"));


// Run all tests
gulp.task("tests", () => {
    return gulp.src(["src/**/*_Spec.ts"], { read: false })
        .pipe(gulpMocha({
            require: ["./testIndex.js"]
        }))
        .on("error", gutil.log);
});

// Watch: compile typescript & run all tests
gulp.task("tests:watch", gulp.series("tests", () => {
    // gulp.watch("src/app/!**!/!*", gulpWatchOpts, gulp.series("typescript"));
    // gulp.watch(["src/app/**/*", "src/shared/**/*"], gulpWatchOpts, gulp.series("typescript"));
    gulp.watch(["compiled/**/*_Spec.js"], gulpWatchOpts, gulp.series("tests"));
}));