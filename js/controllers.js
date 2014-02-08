/*jslint browser: true*/
/*global angular*/
'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {       
        $scope.signupToday = function() {
            $location.path('/signup');   
        }
    }])

    .controller('SingleObjectiveCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams, $location) {
        //stuff
        $scope.objectiveName = $routeParams.objectiveId;
        
    }])

    .controller('ObjectivesCtrl', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $location) {
        //stuff
        
    }])