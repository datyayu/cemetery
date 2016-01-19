var generators = require('yeoman-generator');

// Base module.
var SampleGenerator = generators.Base.extend({})

// Handle prompting.
SampleGenerator.prototype.prompting = function() {
  var done = this.async();

  var prompts = [{
    type: 'input',
    name: 'name',
    message: 'What\'s the name of your project?',

    default: this.appname, // Default to folder name.
  }];

  this.prompt(prompts, (props) => {
    this.props = props;
    done();
  })
};


// Create property to avoid errors.
SampleGenerator.prototype.writing = {};

// Write config files.
SampleGenerator.prototype.writing.config = function() {
  // Copy Package.json
  this.fs.copyTpl(
    this.templatePath('_package.json'),
    this.destinationPath('package.json'),
    { name: this.props.name }
  );

  // Copy bower.json
  this.fs.copyTpl(
    this.templatePath('_bower.json'),
    this.destinationPath('bower.json'),
    { name: this.props.name }
  );

  // Copy .bowerrc
  this.fs.copy(
    this.templatePath('bowerrc'),
    this.destinationPath('.bowerrc')
  );
};

SampleGenerator.prototype.writing.app = function() {
  // Server file.
  this.fs.copy(
    this.templatePath('_server.js'),
    this.destinationPath('server.js')
  );

  // Routes file.
  this.fs.copy(
    this.templatePath('_routes/_all.js'),
    this.destinationPath('routes/all.js')
  );

  // Model file.
  this.fs.copy(
    this.templatePath('_model/_todo.js'),
    this.destinationPath('model/todo.js')
  );

  // Index view file.
  this.fs.copyTpl(
    this.templatePath('_views/_index.ejs'),
    this.destinationPath('views/index.ejs'),
    { name: this.props.name }
  );

  // Public files.
  this.fs.copy(
    this.templatePath('_public/_css/_app.css'),
    this.destinationPath('public/css/app.css')
  );
  this.fs.copy(
    this.templatePath('_public/_js/_app.js'),
    this.destinationPath('public/js/app.js')
  );
};


// Install dependencies.
SampleGenerator.prototype.install = function() {
  this.installDependencies();
};


// Export generator
module.exports = SampleGenerator;
