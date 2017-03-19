angular.module('app', ['angular-promise-utils']).controller('myController', function($scope, $promiseUtils, $http) {
    $scope.findseq = function() {

        $promiseUtils.retryUntilSuccess({zipcode:'33025'}, $scope.getPromise, {}).then(function(resp) {
        	console.log(resp);
            $scope.zipcodes[0].full_address = resp.data.formatted_address;
        });

    }
    var i = 1;
    $scope.getPromise = function(variable) {
    	console.log(variable);
    	i++;
    	if(i>2){
    		        return $http.get("http://localhost:5000/zipcode?address=" + variable.zipcode);

    	}
        return $http.get("http://localhost:5000/zipcode1?address=" + variable.zipcode);
    }

    $scope.findparallel = function() {

    }

    $scope.clear = function() {
        $scope.zipcodes = [{ zipcode: '33025' }, { zipcode: '33178' }, { zipcode: '98766' }];
    }

});
