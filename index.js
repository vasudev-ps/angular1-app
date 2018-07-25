var app = angular.module('index', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "home.htm",
    controller : "Home"
  })
  .when("/aboutus", {
    templateUrl : "aboutus.htm",
    controller : "AboutUS"
  })
  .when("/home", {
    templateUrl : "home.htm",
    controller : "Home"
  })
  .when("/contactus", {
    templateUrl : "contactus.htm",
    controller : "ContactUS"
  });
});
app.controller('AboutUS', function($scope) {
   $scope.msg = "About US";
   $('nav li').removeClass('active');
   $('#aboutus').addClass('active');
});

app.controller("Home", function ($scope) {
    $scope.msg = "Home";
    $('nav li').removeClass('active');
    $('#home').addClass('active');
});
app.controller("ContactUS", function ($scope) {
    $scope.msg = "Contact US";
    $('nav li').removeClass('active');
    $('#contactus').addClass('active');
});
