(function() {
	'use strict';

	angular.module('lojaOnline')
			.controller('ProdutoController', ProdutoController);

	ProdutoController.$inject = [ '$scope', 'Service','$routeParams' ];
	function ProdutoController($scope, Service, $routeParams) {

		$scope.produto = {};
		$scope.mensagem = "";
		
		if($routeParams.id) {
			Service.getProduto($routeParams.id)
	        .then(function(dados) {
	        	$scope.produto = dados.result;
	        })
	        .catch(function(erro) {
	            $scope.mensagem = erro.result;
	        });	
		}
		
		$scope.submeter = function() {
			
			if ($scope.formulario.$valid) {
		
				Service.cadastrar($scope.produto)
		        .then(function(dados) {
		        	$scope.mensagem = dados.result;
		        })
		        .catch(function(erro) {
		            $scope.mensagem = erro.result;
		        });
			}
		};
	};	
})();