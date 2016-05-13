var app = angular.module('app', []);

app.controller('mainController', function($scope) {
    $scope.groupName = "TAALK";
    $scope.groupMembers = "Tiago, Ady, Alex, Lalit and Kevin";
    
    $scope.device = [];
    $scope.device.pathId = 'svg_device1';
    $scope.device.image = 'img/butterfly_32x32.png';
    $scope.device.path = 'M1,216 L240,45 L480,216 L387,495 L96,495 L1,216 z';
    
    $scope.makeUrl = function() {
      return new Sting("#" + $scope.device[0]);
    };
    
    $scope.showDeviceInfo = function(id) {
        if (id == 1){
            $scope.device.battery = '100%';
            $scope.device.name = 'Ady iPhone';
            $scope.device.id = id;
        } else {
            $scope.device.battery = '35%';
            $scope.device.name = 'Other iPhone';
            $scope.device.id = id;
        }     
    };
});
