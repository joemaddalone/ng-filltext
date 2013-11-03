;
angular.module('ng-filltext', []).
service('filltext', ['$http', function($http) {
    return {
        url:"http://www.filltext.com/",
        create: function(opts, callback) {
            opts.callback = "JSON_CALLBACK";
            opts.rows = opts.rows || 5;
            var config = {};
            config["params"] = opts;
            $http.jsonp(this.url, config)
            .success(function(data,status) {
                callback(data,status);
            }).
            error(function(data,status){
               callback(data,status); 
            });
        }
    }
}]).
directive('filltextTable', function(filltext) {
    return {
        restrict: "C",
        scope: {
            item: "=",
            key: "="
        },
        link: function($scope, element, attributes) {
            filltext.create($scope.$eval(attributes.dataset), function(data) {
                $scope.FTData = data;
                $scope.order = $scope.$eval(attributes.order);
                $scope.fto = function(val) {
                    return $scope.order.indexOf(val)
                }
            });
        },
        template: '<tr ng-repeat="item in FTData">' + '<td ng-repeat="key in order">{{item[key]}}</td>' + '</tr>'
    }
}); 