/* global module: false */

module.exports = function (grunt) {

  // -----------------------------
  // Common
  // -----------------------------

  var _ = require('lodash');
  var isDev = (grunt.option('dev') !== undefined) ? Boolean(grunt.option('dev')) : false;
  console.log(isDev ? '- Development Env' :  '- Production Env');
  var src_css = 'src/sass/**/*.scss';
  var src_img = 'src/images';
  var build_assets = 'public/assets';
  var build_css = build_assets + '/css';
  var build_img = build_assets + '/images';

  // -----------------------------
  // Config
  // -----------------------------

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: {
      before: {
        files: [{
          dot: true,
          src: [ 'public/assets' ]
        }]
      }
    },

    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: src_img,
            src: ["**/*"],
            dest: build_img
          }
        ]
      }
    },

    sass: {
      dev: {
        options: {
          style: (isDev ? "expanded" : "compact" ),
          lineNumbers: (isDev ? true : false)
        },
        files: {
          "public/assets/css/common.css": "src/sass/common.scss",
        }
      }
    },

    watch: {
      sass: {
        files: ["src/sass/**/*.scss"],
        tasks: ["sass:dev"],
        options: {
          forever: false
        }
      },
      common: {
        files: ["src/images/**/*"],
        tasks: ["copy:build"]
      }
    },

    compress: {
      assets: {
        options: {
          mode: "gzip"
        },
        pretty: true,
        expand: true,
        src: ["public/assets/css/*.css", "public/assets/js/*.js"]
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      }, 
      my_target: {
        files: {
          'public/assets/js/app.min.js': ['public/assets/js/app.js']
        }
      }
    }
  });

  // -----------------------------
  // Load tasks
  // -----------------------------

  require('load-grunt-tasks')(grunt);

  // -----------------------------
  // Register tasks
  // -----------------------------

  grunt.registerTask('css', ['sass']);
  grunt.registerTask('js-compress', ['uglify','compress']);

};

