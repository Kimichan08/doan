// khai bao app bang cu phap angular.module('ten app', ['module(option)'])

var app = angular.module('myApp', ["ngRoute"])

//dinh nghia controller cho angularjs app, theo ten cua ng-controll
/*syntax: app.controller('ten ctrl', function(cac params su dung, mac dinh phai co $scope){
    cac code thuc thi trong day
}) 
*/
app.controller('myCtrl', function ($scope, $http, $location) {
    $scope.submit = function (search){
        $location.path('/result')   

        $http.get('data.json/products')
        .then((response) => {
            console.log(response.data)
        })
        $scope.result = search;

    }

    $http.get('data.json')
    .then((response) => {
        $scope.products = response.data.products
    })
})
// dinh tuyen router cho angularjs app
app.config([
    "$routeProvider", function($routeProvider){
        $routeProvider
        .when('/',{
            templateUrl: "views/home.html"
        })
        .when('/about', {
            templateUrl: "views/about.html"
        })
        .when('/service', {
            templateUrl: "views/service.html"
        })
        .when('/pricing', {
            templateUrl: "views/pricing.html"
        })
        .when('/shop', {
            templateUrl: "views/shop.html"
        })
        .when('/contact', {
            templateUrl: "views/contact.html"
        })
        .when('/result', {
            templateUrl: "views/result.html"
        })
        .when('/details/:id', {
            templateUrl: "views/details.html"
        })
    }
])