// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'jquery/dist/jquery.min.js',
      'jquery-ui-dist/jquery-ui.js',
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'systemjs-plugin-css/css.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'chart.js/dist/**/*.+(js|js.map)',
      'primeng/**/*.+(ts|js|js.map)',
      'primeui/**/*.+(css|js|js.map|woff2|woff|ttf|png)',
      'bourbon-neat/app/assets/**',
      'bourbon/app/assets/**',
      'font-awesome/**',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap/dist/fonts/**',
      'ng2-dragula/**/*.+(js|ts)',
      'dragula/**/*.+(js|ts|css)',
      'contra/**/*.+(js|ts)',
    'crossvent/**/*.+(js|ts)',
    'atoa/**/*.+(js|ts)',
    'ticky/**/*.+(js|ts)',
    'custom-event/**/*.+(js|ts)',

    ],
    polyfills:[
      'vendor/jquery/dist/jquery.min.js',
      'vendor/jquery-ui-dist/jquery-ui.js',
      'vendor/es6-shim/es6-shim.js',
      'vendor/reflect-metadata/Reflect.js',
      'vendor/systemjs/dist/system.src.js',
      'vendor/zone.js/dist/zone.js'
    ]
  });
};
