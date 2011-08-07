#!/usr/bin/env node
;var cwd, fs, jsondir, jsonfile, match, precompile, settings;
jsonfile = process.ARGV[2] || 'tmpl-precompile.json';
precompile = require('../lib/tmpl-precompile').precompile;
fs = require('fs');
settings = {};
try {
  settings = JSON.parse(fs.readFileSync(jsonfile, 'utf8'));
} catch (err) {
  throw "\nERR:tmpl-precompile: No configuration file found in this directory.\nCurrent dir: " + (process.cwd()) + "\nFor more information, please visit: https://github.com/tauren/tmpl-precompile\n" + err;
}
if (settings !== {}) {
  settings.args = process.ARGV;
  settings.relative = settings.relative || true;
  if (settings.relative === false) {
    cwd = '';
  } else if (jsonfile.indexOf('/' > 0)) {
    match = jsonfile.split(/\//);
    jsondir = match.slice(0, match.length - 1).join('/');
    cwd = process.cwd() + '/' + jsondir;
  } else {
    cwd = process.cwd() + jsonfile;
  }
  console.log('Using configuration file: ' + cwd + '/' + jsonfile);
  precompile(settings, cwd);
}