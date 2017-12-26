(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description # app
	 * 
	 * Main modules of the application.
	 */

	angular.module('lojaOnline', ['diretivas','ngAnimate','ngRoute','ngResource'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);
		
		$routeProvider.when('/produto', {
			templateUrl : 'app/modules/produto/produto-lista.html',
			controller : 'ProdutosController'
		});

		$routeProvider.when('/produto/novo', {
			templateUrl : 'app/modules/produto/produto.html',
			controller : 'ProdutoController'
		});

		$routeProvider.when('/produto/editar/:id', {
			templateUrl : 'app/modules/produto/produto.html',
			controller : 'ProdutoController'
		});

		$routeProvider.otherwise({redirectTo: '/produto'});
	});
})();