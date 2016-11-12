const app = angular.module('allstar', [
  'ngRoute'
])

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/servicesweprovide', {
        templateUrl: '/templates/services.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })
      .when('/customertestimonials', {
        templateUrl: '/templates/testimonials.html',
        controller: 'TestimonialsController',
        controllerAs: 'testimonials'
      })
      .when('/contact', {
        templateUrl: '/templates/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      $locationProvider.html5Mode({
        enable: true,
        requireBase: false});
  }
])

app.controller('NavigationController', NavigationController)
NavigationController.inject = ['$scope', '$location', '$anchorScroll', '$window']
function NavigationController($scope, $location, $anchorScroll, $window) {

  const screenHeight =  $window.innerHeight
  const vm = this

  vm.logo = 'AllStar'
  vm.company = 'Plumbing & Fire Sprinkler, Inc.'
  vm.statement = 'Quality & Reliability Makes Our Team The Best In Our Field'
  vm.phone = '949-470-0072'
  vm.serving = 'Serving all of Orange County, CA'
}
