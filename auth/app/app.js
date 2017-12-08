angular.module('ngView', [], function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Main', {
            template: '<div> Main </div>',
            controller: MainCntl,
        })
        .when('/Book', {
            template: '<div> Book </div>',
            controller: BookCntl,
        })
        .when('/', {
            template: '<div> TEST </div>',
            controller: ChapterCntl
        });

    $routeProvider.otherwise( { redirectTo: '/' });
    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});

function MainCntl($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
}

function BookCntl($scope, $routeParams) {
    $scope.name = "BookCntl";
    $scope.params = $routeParams;
}

function ChapterCntl($scope, $routeParams) {
    $scope.name = "ChapterCntl";
    $scope.params = $routeParams;
}
