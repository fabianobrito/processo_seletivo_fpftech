(function() {
	'use strict';

	var recursoProduto = '';

	angular.module('lojaOnline').factory('Service', Service);
	Service.$inject = [ '$q', '$resource' ];
	function Service($q, $resource) {
		recursoProduto = $resource('/product/:id');
		var service = {};
		
		service.getProduto = function(id){
			return $q(function(resolve, reject) {
				recursoProduto.get({id: id}, function(produto) {
					resolve({
						result: produto
	                });
				}, function(erro) {
					reject({
						result: 'Erro: '+ erro
	                });
				});
			}); 
		};	
		service.getProdutos = function(){
			return $q(function(resolve, reject) {
				recursoProduto.query(function(produtos) {
					resolve({
						result: produtos
                    });
				}, function(erro) {
					reject({
						result: 'Erro: '+ erro
                    });
				});
			});
		};
		service.cadastrar = function(produto) {
            return $q(function(resolve, reject) {

                if(produto._id) {
                	recursoProduto.update({id: produto.id}, produto, function() {
                        resolve({
                        	result: 'Produto ' + produto.description + ' atualizada com sucesso'
                        });
                    }, function(erro) {
                        reject({
                        	result: 'Não foi possível atualizar o produto ' + produto.description
                        });
                    });

                } else {
                	recursoProduto.save(produto, function() {
                        resolve({
                        	result: 'Produto ' + produto.description + ' inserido com sucesso'
                        });
                    }, function(erro) {
                        reject({
                        	result: 'Não foi possível incluir este produto ' + produto.description
                        });
                    });
                } 
            });
        };
        service.remover = function(produto){
        	return $q(function(resolve, reject){
        		recursoProduto.delete({id: produto.id}, function() {
        			resolve({
                    	result: 'Produto ' + produto.description + ' removida com sucesso!'
                    });
    			}, function(erro) {
    				reject({
                    	result: 'Não foi possível apagar o produto ' + produto.description
                    });
    			});
        	});	
        };
		return service;
	};

})();