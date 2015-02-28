module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      js: {
        'build/js/mecha-brew.min.js': ['src/js/app.js'],
        'build/js/lib/modernizr.min.js': ['bower_components/foundation/js/vendor/foundation.js']
      },
    },
	copy: {
      files: {
        src: 'src/index.html',
        dest: 'build/index.html'
      },
    },
    bowercopy: {
        options: {
        	runBower: true
        },
        libs: {
            options: {
                destPrefix: 'build/js/lib'
            },
            files: {
                'jquery.min.js': 'jquery/dist/jquery.min.js',
                'foundation.min.js': 'foundation/js/foundation.min.js',
                'rem.min.js': 'rem-unit-polyfill/js/rem.min.js'
            },
        }
    },
    sass: {                             
		dist: {                           
		  options: {                     
			style: 'compressed'
		  },
		  files: {                         
			'build/css/style.css': 'src/scss/style.scss',
			'build/css/normalize.css': 'bower_components/foundation/scss/normalize.scss'
		  }
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-copy');
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  grunt.registerTask('default', ['uglify', 'copy', 'sass', 'bowercopy']);

};