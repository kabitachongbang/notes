var gulp = require("gulp");

gulp.task("copy", function() {
  return gulp
    .src([
      "./node_modules/angular/angular.min.js",
      "./node_modules/angular-route/angular-route.min.js",
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      "./node_modules/popper.js/dist/umd/popper.min.js"
    ])
    .pipe(gulp.dest("./lib"));
});
