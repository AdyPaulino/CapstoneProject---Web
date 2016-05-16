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
                    'path': 'M10,256 L290,95 L230,266 L127,350 L136,225 L10,256 z',
                    'name': 'Ady iPhone',
                    'battery': '100%'};
    var device2 = {'width': 32, 
                    'height': 32,
                    'initialX': 0,
                    'initialY': 0,
                    'pathId': 'svg_device2',
                    'image': 'img/icon.svg',
                    'path': 'M240,45 L1,216 L320,116 L387,295 L96,295 L1,216 z',
                    'name': 'Lalit iPhone',
                    'battery': '35%'};
    var device3 = {'width': 32, 
                    'height': 32,
                    'initialX': 0,
                    'initialY': 0,
                    'pathId': 'svg_device3',
                    'image': 'img/iphone_32x32.png',
                    'path': 'M320,116 L1,216 L240,45 L387,295 L96,295 L320,116 z',
                    'name': 'Lalit iPhone',
                    'battery': '35%'};
    
    $scope.deviceList = [device1, device2, device3];
    
    $scope.showInfo = false;
    $scope.showDeviceInfo = function(id) {
        getDeviceInfo(id);
        $scope.showInfo = true;
    };
    
    $scope.showDeviceName = function(id) {
        angular.forEach($scope.deviceList, function(value, key) {
            if(value.pathId == id){
                $scope.deviceName = value.name;
            } 
        });
    };
    
    getDeviceInfo = function(id) {
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
