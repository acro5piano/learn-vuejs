var gulp        = require('gulp')
var browserSync = require('browser-sync').create()

// Run Rails server
const spawn = require('child_process').spawn;

gulp.task('serve', function() {
  spawn('npm', ['start'])
    .stdout.on('data', function(data){
      process.stdout.write(`express: ${data}`)
    })
})

// Static server
gulp.task('watch', function() {
  browserSync.init({
    proxy: 'http://localhost:1234',
    open: false,
    notify: {
      styles: {
        top: 'auto',
        bottom: '0'
      }
    }
  })
  gulp.watch(['./public/**/*', './views/**/*']).on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])
