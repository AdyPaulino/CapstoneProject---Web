var app = angular.module('app', []);

app.controller('mainController', function($scope) {
    $scope.groupName = "TAALK";
    $scope.groupMembers = "Tiago, Ady, Alex, Lalit and Kevin";
    $scope.device = {};
    
    var device1 = {'width': 32, 
                    'height': 32,
                    'initialX': 0,
                    'initialY': 0,
                    'pathId': 'svg_device1',
                    'image': 'img/butterfly_32x32.png',
                    'path': 'M1,216 L240,45 L480,216 L387,495 L96,495 L1,216 z',
                    'name': 'Ady iPhone',
                    'battery': '100%'};
    
    $scope.deviceList = [device1];
    
    $scope.showInfo = false;
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
        $scope.showInfo = true;
    };
    
    $scope.showDeviceName = function(id) {
        angular.forEach($scope.deviceList, function(value, key) {
            if(value.pathId == id){
                $scope.device = value;
            } 
        });
    };
});

app.directive('tooltip', function(){
    return {
        restrict: 'E',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
