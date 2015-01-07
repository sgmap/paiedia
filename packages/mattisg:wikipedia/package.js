Package.describe({
	name: 'mattisg:wikipedia',
	summary: 'Display Wikipedia content.',
	version: '0.0.1',
	git: 'git://github.com/MattiSG/meteor-wikipedia'
});


Package.onUse(function(api) {
	api.versionsFrom('1.0.1');
	api.use('templating', 'client');
	api.use('http', 'server');
	api.use('underscore', 'server');
	api.use('reactive-var', 'client');
	api.use('tap:i18n@1.2.1');
	api.addFiles('client/templates/wikipedia.html',  'client');
	api.addFiles('client/templates/wikipedia.js',    'client');
	api.addFiles('client/stylesheets/mediawiki.css', 'client');
	api.addFiles('i18n/wikipedia_cite.fr.i18n.json');
	api.addFiles('server/wikipedia.js',              'server');
});
