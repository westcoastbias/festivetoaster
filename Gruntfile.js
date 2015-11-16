module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'client/views/AppView.js',
          'client/models/AppModel.js',
          'client/views/signinView.js',
          'client/models/user.js',
          'client/views/tileView.js',
          'client/collections/users.js',
          'client/views/dashboardView.js',
          'client/views/connectView.js',
          'client/views/profileView.js',
          'client/router.js'
        ],
        dest: 'client/build/production.js'
      }
    },


    uglify: {
      build: {
        src: 'client/build/production.js',
        dest: 'client/build/production.min.js'
      }
    },

    watch: {
      scripts: {
        files: [
          'client/views/**/*.js',
          'client/models/**/*.js',
          'client/collections/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    // shell: {
    //   prodServer: {
    //     command: 'git push azure master'
    //   }
    // },
    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['concat', 'uglify']);


  // grunt.registerTask('deploy', [
  //   'build', 'test', 'upload' 
  //     // add your production server task here
  // ]);


};
