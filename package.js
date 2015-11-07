Package.describe({
  name: 'heaven7:wsl-alert',
  version: '0.0.2',
  summary: 'Wrapper for juliancwirko:s-alert',
  git: 'https://github.com/heaven7/wsl-alert.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.addFiles('wsl-alert.js');

    api.use('juliancwirko:s-alert@3.1.2');
    api.imply('juliancwirko:s-alert');

    api.export('wAlert', ['client'])

});
