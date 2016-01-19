$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: 'Yayu\'s Test',

		// Tagline for your site
		siteTagline: 'A CMS.js demo',

		// Email address
		siteEmail: 'aoitsu3@gmail.com',

		// Name
		siteAuthor: 'datyayu',

		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/datyayu/cemetery/tree/gh-pages/%5BJS%5D%5BCMS.JS%5D%20CMS.js%20demo', newWindow: false},
			{ name: 'About'}
		],

		// Posts folder name
		postsFolder: '%5BJS%5D%5BCMS.JS%5D%20CMS.js%20demo/posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: '%5BJS%5D%5BCMS.JS%5D%20CMS.js%20demo/pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'datyayu',
			repo: 'cemetery'
		}
	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
