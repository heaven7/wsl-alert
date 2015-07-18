Package.describe({
  name: 'heaven7:wsl-alert',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles('wsl-alert.js');

    api.use('juliancwirko:s-alert@2.4.1');
    api.imply('juliancwirko:s-alert');

    api.export('wAlert', ['client'])

});
