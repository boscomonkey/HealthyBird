"use strict";

angular.module('myApp.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
         templateUrl: 'partials/home.html',
         controller: 'HomeCtrl'
      });

      $routeProvider.when('/game', {
         templateUrl: 'partials/game.html',
         controller: 'GameCtrl'
      });

      $routeProvider.when('/objectives', {
         templateUrl: 'partials/objectives.html',
         controller: 'ObjectivesCtrl'
      });

      $routeProvider.when('/objectives/:objectiveId', {
         templateUrl: 'partials/singleObjective.html',
         controller: 'SingleObjectiveCtrl'
      });

      $routeProvider.when('/chat', {
         templateUrl: 'partials/chat.html',
         controller: 'ChatCtrl'
      });

      $routeProvider.when('/account', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/account.html',
         controller: 'AccountCtrl'
      });

      $routeProvider.when('/profile/:userId', {
         templateUrl: 'partials/viewSingleUser.html',
         controller: 'ViewSingleUserCtrl'
      });

      $routeProvider.when('/artpieces', {
         templateUrl: 'partials/viewAllArt.html',
         controller: 'ViewAllArtCtrl'
      });

      $routeProvider.when('/artpieces/:artId', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/viewSingleArt.html',
         controller: 'ViewSingleArtCtrl'
      });

      $routeProvider.when('/orgs', {
         templateUrl: 'partials/viewAllOrg.html',
         controller: 'ViewAllOrgCtrl'
      });

      $routeProvider.when('/orgs/:orgId', {
         templateUrl: 'partials/viewSingleOrg.html',
         controller: 'ViewSingleArtsOrgCtrl'
      });

      $routeProvider.when('/createOrg', {
         authRequired: true, // must authenticate before viewing this page
         templateUrl: 'partials/createOrg.html',
         controller: 'CreateArtOrgCtrl'
      });

      $routeProvider.when('/createTarget', {
         templateUrl: 'partials/createTarget.html',
         controller: 'CreateTargetCtrl'
      });

      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'AuthCtrl'
      });

      $routeProvider.when('/signup', {
         templateUrl: 'partials/signup.html',
         controller: 'AuthCtrl'
      });

      $routeProvider.otherwise({redirectTo: '/home'});
   }]);