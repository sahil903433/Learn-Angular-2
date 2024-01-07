"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'primeng': 'vendor/primeng',
  'primeui': 'vendor/primeui'
};

/** User packages configuration. */
const packages: any = {
  'primeng':{
    format: 'cjs'
  },
  'ng2-dragula':{
    format: 'cjs'
  },
  'dragula': { defaultExtension: 'js', main: './dragula.js',meta: {
    'dist/*.css': { loader: 'css' }
  } },
  'contra': { defaultExtension: 'js', main: './contra.js' },
  'crossvent': { defaultExtension: 'js', main: './dist/crossvent.js' },
  'atoa': { main: 'atoa.js', defaultExtension: 'js' },
  'ticky': { main: 'ticky.js', defaultExtension: 'js' },

  'custom-event': { main: 'index.js', defaultExtension: 'js' },
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/form-details',
  'app/questions',
  'app/questions/textfield-question',
  'app/questions/checkbox-question',
  'app/questions/dropdown-question',
  'app/questions/radio-group-question',
  'app/questions/checkbox-group-question'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',

    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'chart.js' : 'vendor/chart.js',
    'primeng' : 'vendor/primeng',
    'primeui' : 'vendor/primeui',
    'jquery':'vendor/jquery',
    'ng2-dragula':'vendor/ng2-dragula',
    'dragula':'vendor/dragula',
    'contra': 'vendor/contra',
    'crossvent': 'vendor/crossvent',
    'atoa': 'vendor/atoa',
    'ticky': 'vendor/ticky',
    'custom-event': 'vendor/custom-event',
    'css': 'vendor/systemjs-plugin-css/css.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
