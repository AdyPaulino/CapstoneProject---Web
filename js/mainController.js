var app = angular.module('app', []);

app.controller('mainController', function($scope) {
    //group info
    $scope.groupName = "TAALK";
    $scope.groupMembers = "Tiago, Ady, Alex, Lalit and Kevin";
    
    //floor map
    $scope.map = {'path': 'M1,216 L240,45 L480,216 L387,495 L96,495 L1,216 z',
                 'id': 'svg_3'};
    
    
    //device list
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
                    'name': 'Kevin iPhone',
                    'battery': '35%'};
    var device4 = {'width': 32, 
                    'height': 32,
                    'initialX': 0,
                    'initialY': 0,
                    'pathId': 'svg_device4',
                    'image': 'img/iphone_32x32.png',
                    'path': 'M387,295 L100,216 L240,45 L230,450 L320,116 L96,295 L100,116 z',
                    'name': 'Tiago\'s phone',
                    'battery': '35%'};
    
    var device5 = {'width': 32, 
                    'height': 32,
                    'initialX': 0,
                    'initialY': 0,
                    'pathId': 'svg_device5',
                    'image': 'img/iphone_32x32.png',
                    'path': 'M127,350 L300,295 L100,216 L240,45 L230,450 L320,116 L96,295 L230,450 z',
                    'name': 'Yan\'s phone',
                    'battery': '45%'};
    
    $scope.deviceList = [device1, device2, device3, device4, device5];
    
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
    
    //beacon list
    var beacon1 = {
        'coordinates': {'x':99, 'y':145},
        'r': 3,
        'id': 'pointA'
    };
    
     var beacon2 = {
        'coordinates': {'x':315, 'y':100},
        'r': 3,
        'id': 'pointB'
    };
    
    var beacon3 = {
        'coordinates': {'x':435, 'y':350},
        'r': 3,
        'id': 'pointC'
    };
    
     $scope.beaconList = [beacon1, beacon2, beacon3];
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
