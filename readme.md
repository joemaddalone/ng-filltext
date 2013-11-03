ng-filltext
====================

ng-filltext makes using filltext.com with AngularJS a breeze.


Install with bower:
---------------------
    $ bower install ng-filltext

Example:
---------------------
	angular.module('APP',['ng-filltext']).
	controller('Ctrl',['$scope','filltext',
		function($scope,filltext){
			var config = {
				rows:3,
				fullName:'{firstName}~{lastName}',
				avatar:'{image|140x140}',
				company:'{business}',
				overview:'{lorem|10}',
				position : '["CEO","CIO","CFO","C3PO"]'
			}
		filltext.create(config,function(data){
			$scope.people = data
			console.log($scope.people)
		});
	}]);

Output:
---------------------
	[
		{
			"avatar": "http://www.filltext.com/image/140/140",
			"company": "Wood Services",
			"fullName": "Priscilla Rucker",
			"overview": "lorem vestibulum magna convallis augue eget sed consectetur sit lacus",
			"position": "CIO"
		},
		{
			"avatar": "http://www.filltext.com/image/140/140",
			"company": "Mcmenamin Incorporated",
			"fullName": "Val Flavin",
			"overview": "mattis vel pretium pulvinar sed sit odio pulvinar lacus adipiscing",
			"position": "CEO"
		},
		{
			"avatar": "http://www.filltext.com/image/140/140",
			"company": "Chambers International",
			"fullName": "Latia Meyer",
			"overview": "dolor pulvinar vitae etiam lacus curabitur porta dolor dolor vitae",
			"position": "CIO"
		}
	] 	