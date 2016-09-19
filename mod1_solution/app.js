(function () {
    'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    var inputClient = $scope.listItems;
    var Items = inputClient.split(",");
    var nbreItems = Items.length;

    if (nbreItems == 0){
        $scope.message = "Please enter data first";
    } else if (nbreItems > 3){
        $scope.message = "Too much!";
    } else {
        $scope.message = "Enjoy!";
    }
return $scope.message;
}

})();