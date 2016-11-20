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
      .when('/ServicesWeProvide/Plumbing', {
        templateUrl: '/templates/services/plumbing.html',
        controller: 'NavigationController',
        controllerAs: 'services'
      })
      .when('/ServicesWeProvide/ResidentialFireSprinklers', {
        templateUrl: '/templates/services/residentialfiresprinklers.html',
        controller: 'NavigationController',
        controllerAs: 'services'
      })
      .when('/ServicesWeProvide/CommercialFireSprinklers', {
        templateUrl: '/templates/services/commercialfiresprinklers.html',
        controller: 'NavigationController',
        controllerAs: 'services'
      })
      .when('/ServicesWeProvide/IrrigationSprinklerSystems', {
        templateUrl: '/templates/services/irrigationsprinklersystems.html',
        controller: 'NavigationController',
        ContactController: 'services'
      })
      .when('/ServicesWeProvide/BackFlowServices', {
        templateUrl: '/templates/services/backflowservices.html',
        controller: 'NavigationController',
        controllerAs: 'services'
      })
      .when('/ServicesWeProvide/WaterHeaters', {
        templateUrl: '/templates/services/waterheaters.html',
        controller: 'NavigationController',
        controllerAs: 'services'
      })
      .when('/CustomerTestimonials', {
        templateUrl: '/templates/testimonials.html',
        controller: 'NavigationController',
        controllerAs: 'testimonials'
      })
      .when('/ContactUs', {
        templateUrl: '/templates/contact.html',
        controller: 'NavigationController',
        controllerAs: 'contacts'
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
  $scope.goToPlumbingView = function() {
    $location.path('/ServicesWeProvide/Plumbing')
    scroll()
  }
  $scope.goToResidentialFireSprinklersView = function() {
    $location.path('/ServicesWeProvide/ResidentialFireSprinklers')
    scroll()
  }
  $scope.goToCommercialFireSprinklersView = function() {
    $location.path('/ServicesWeProvide/CommercialFireSprinklers')
    scroll()
  }
  $scope.goToIrrigationSprinklerSystemsView = function() {
    $location.path('/ServicesWeProvide/IrrigationSprinklerSystems')
    scroll()
  }
  $scope.goToBackFlowServicesView = function() {
    $location.path('/ServicesWeProvide/BackFlowServices')
    scroll()
  }
  $scope.goToWaterHeatersView = function() {
    $location.path('/ServicesWeProvide/WaterHeaters')
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
