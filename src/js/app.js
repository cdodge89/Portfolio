(function(){
	angular.module('routerApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/resume');

		$stateProvider
			.state('resume', {
				url: '/resume',
				templateUrl: '../views/partial-resume.html',
				controller: 'ResumeController as resume',
				
			})
			.state('contact', {
				url: '/contact',
				templateUrl: '../views/partial-contact.html',
				controller: 'ContactController as contact',
				
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: '../views/partial-portfolio.html',
				controller: 'PortfolioController as portfolio',
				
			})
			.state('about', {
				url: '/about',
				templateUrl: '../views/partial-about.html',
				controller: 'AboutController as about',
				
			});
	});
})();