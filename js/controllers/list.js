(function(){

    var app = angular.module("pokemonGallery");
    app.factory('myService',function($http){


        var myService = {
            async: function(){

                var promise = $http.get('http://pokeapi.co/api/v2/pokemon/?limit=151').then(function(response){
                    console.log(response);
                    return response.data.results;
                
            });
                return promise;
            }
        };
        return myService;
        
    });



    app.controller('listCtrl', function(myService,$scope) {
        myService.async().then(function(d){
            $scope.data = d;
            $scope.search="";
        })
            

            $scope.viewby = 20;
            $scope.totalItems = 151;
            $scope.currentPage = 1;
            $scope.itemsPerPage = $scope.viewby;
            
            
    });
 		
})();