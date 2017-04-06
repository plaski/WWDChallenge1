module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          //style:'compressed'
        },
        files: {
          'css/style.css' : 'css/sass/style.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'css/style.css':'css/style.css'
        }
      }
    },
    browserSync: {
	    dev: {
	        bsFiles: {
	            src : [
	                'css/*.css',
	                '*.html',
	                'js/*.js'
	            ]
	        },
	        options: {
	            watchTask: true,
	            server: {
	            	baseDir: "./"
	            }
	        }
	    }
	},
    watch: {
      css: {
        files: 'css/sass/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default',['browserSync', 'watch']);
}