const app = angular.module('allstar', [
  'ngRoute', 'ngAnimate'
])

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/Home', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/ServicesWeProvide', {
        templateUrl: '/templates/services.html',
        controller: 'ServicesController',
        controllerAs: 'services'
      })
      .when('/CustomerTestimonials', {
        templateUrl: '/templates/testimonials.html',
        controller: 'TestimonialsController',
        controllerAs: 'testimonials'
      })
      .when('/ContactUs', {
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

  const scroll = () => {
    $location.hash('__')
    $anchorScroll()
    $window.scrollBy(0, screenHeight)
  }

  $scope.goToHomeView = function() {
    $location.path('/Home')
    scroll()
  }
  $scope.goToServicesView = function() {
    $location.path('/ServicesWeProvide')
    scroll()
  }
  $scope.goToTestimonialView = function() {
    $location.path('/CustomerTestimonials')
    scroll()

  }
  $scope.goToContactView = function() {
    $location.path('/ContactUs')
    scroll()
  }
}
