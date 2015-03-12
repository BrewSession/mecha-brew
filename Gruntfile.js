module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowercopy: {
        options: {
        	runBower: true
        },
        libs: {
            options: {
                destPrefix: 'build'
            },
            files: {
                'js/lib/rem.min.js': 'rem-unit-polyfill/js/rem.min.js'
            },
            folders: {
                'fonts': 'font-awesome/fonts'
            }
        }
    },
    rename: {
        css: {
            src: 'bower_components/pure/pure.css',
            dest: 'bower_components/pure/_pure.scss'
        }
    },
    uglify: {
      js: {
        'build/js/mecha-brew.min.js': ['src/js/app.js']
      },
    },
	copy: {
      html: {
        src: 'src/index.html',
        dest: 'build/index.html'
      },
    },
    sass: {                             
		dist: {                           
		  options: {                     
			style: 'compressed'
		  },
		  files: {                         
			'build/css/style.css': 'src/scss/style.scss',
		  }
		}
	},
	watch: {
		html: {
	  		files: '**/*.html',
			tasks: ['copy']
		},
		css: {
	  		files: '**/*.scss',
			tasks: ['sass']
		}
	}
  });

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-rename');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['bowercopy', 'rename', 'uglify', 'copy', 'sass', 'watch']);

};