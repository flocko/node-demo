module.exports = function(grunt){
	require("matchdep").filter("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		// autoprefix compass created stylesheet
	    autoprefixer: {
	      dev: {
	        options: {

	        },
	        src: 'public/css/core.css',
	        dest: 'public/css/core.css'
	      }
		},

		// scss compass configs for development and production
		compass: {
			dev: {
				options: {
					cssDir: 'public/css',
					sassDir: 'public/sass',
					imagesDir: 'public/img',
					fontsDir: 'public/fonts',
					javascriptsDir: 'public/js',
					force: true,
					relativeAssets     : true,
					environment: 'development',
					outputStyle: 'expanded'
				}
			},
			dist: {
				options: {
					cssDir: 'public/css',
					sassDir: 'public/sass',
					imagesDir: 'public/img',
					fontsDir: 'public/fonts',
					javascriptsDir: 'public/js',
					force: true,
					relativeAssets     : true,
					environment: 'production',
					outputStyle: 'compressed'
				}
			}
		},

		// watch task - realtime
		watch: {
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass:dev', 'autoprefixer:dev']
			}
		}

    });

	// Common Tasks
	grunt.registerTask('default', ['watch:compass']);
    grunt.registerTask('built', ['compass:dist', 'autoprefixer:dev']);

};