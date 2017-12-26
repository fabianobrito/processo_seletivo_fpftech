(function() {
	'use strict';

	angular.module('lojaOnline')
			.controller('ProdutosController', ProdutosController);

	ProdutosController.$inject = [ '$scope', 'Service' ];
	function ProdutosController($scope, Service) {

		$scope.produtos = [];
		$scope.mensagem = "";
		
		Service.getProdutos()
        .then(function(dados) {
        	$scope.produtos = dados.result;
        })
        .catch(function(erro) {
            $scope.mensagem = erro.result;
        });
		
		$scope.remover = function(produto) {
			Service.remover(produto)
	        .then(function(dados) {
	        	var indice = $scope.produtos.indexOf(produto);
				$scope.produtos.splice(indice, 1);
	        	$scope.mensagem = dados.result;
	        })
	        .catch(function(erro) {
	            $scope.mensagem = erro.result;
	        });
			
		};
	};	
})();