'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the first-rate ' + chalk.red('generator-tidal-midi-synth') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'What is the name of your module?',
        default: 'CustomSynth',
        validate: function (input) {
          const regex = /^[a-zA-Z]*$/;
          const result = regex.test(input);
          if (!result) {
            return 'Module name must only contain letters.';
          }
          return true;
        }
      }];

    return this.prompt(prompts).then(props => {
      this.props = props;
      const moduleName = props.moduleName.trim();
      this.props.controllerName = `${moduleName.charAt(0).toLowerCase()}${moduleName.slice(1)}Controller`;
      this.log('module name:', this.props.moduleName);
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('synth.cabal'),
      this.destinationPath(`${this.props.moduleName.trim()}.cabal`),
      {moduleName: this.props.moduleName}
    );

    this.fs.copyTpl(
      this.templatePath('synth.hs'),
      this.destinationPath(`${this.props.moduleName.trim()}.hs`),
      {
        moduleName: this.props.moduleName,
        controllerName: this.props.controllerName
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
