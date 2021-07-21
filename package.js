Package.describe({
  name: 'constellation:autopublish',
  version: '0.4.11',
  summary: 'Autopublish toggle plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-autopublish.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.2');

  api.use(['templating@1.3.2', 'tracker'], 'client');
  api.use('check','server');
  api.use('underscore');
  api.use('constellation:console@1.4.11', 'client');
  api.use('dburles:mongo-collection-instances@0.3.5', 'server');

  api.addFiles('autopublish.html','client');
  api.addFiles('autopublish-client.js','client');
  api.addFiles('autopublish-server.js','server');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
