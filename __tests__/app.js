'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tidal-midi-synth:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({moduleName: 'foo'});
  });

  it('creates files', () => {
    assert.file([
      'foo.cabal', 'foo.hs'
    ]);
  });
});
