({
    appDir: "../",
    baseUrl: "bootstrap",
    dir: "../application-built",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    //optimize: "none",

	paths: {
		assets: 	'../application/assets',
		app: 		'../application',
		views: 		'../application/modules/views',
		templates: 	'../application/modules/templates',
		collections:'../application/modules/collections',
		models: 	'../application/modules/models',
		async: 		'../application/library/async',
		google: 	'../application/library/google',
		locate: 	'../application/library/locate',
		text:		'../application/library/text',
		mapstraction:		'../application/library/mapstraction',
		jquery:		'empty:'
	},
	
    modules: [
        
        //Optimize the application files. Exclude jQuery since it is
        //included already in require-jquery.js
        {
            name: "main"
        }
    ]
})