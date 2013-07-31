;angular.module('ng-filltext',[]).
service('filltext',['$http',function($http){
	return {
		get:function(opts,callback) {
			opts.callback = "JSON_CALLBACK"
			opts.rows = opts.rows || 5
				var config = {}
				config["params"] = opts
				$http.jsonp("http://www.filltext.com", config, {}).success(function (data) {
    			callback(data)
			});
		}
	}
}]).
directive('filltextTable',function(filltext){
	return {
		restrict:"C",
		scope: {
     		item: "=",
     		key: "="
  		},
		link:function($scope,element,attributes){
			filltext.get($scope.$eval(attributes.dataset),function(data){
				$scope.FTData=data;
				$scope.order=$scope.$eval(attributes.order);
				$scope.fto = function(val){
					return $scope.order.indexOf(val)
				}
			});
		},
		template:'<tr ng-repeat="item in FTData">'+
				'<td ng-repeat="key in order">{{item[key]}}</td>' +
				'</tr>'
	}
});
