/* global app */

app.controller('SlackCtrl', [
  '$scope', '$rootScope', '$routeParams', '$location', 'Email', '$http', '$cookies',
  function($scope, $rootScope, $routeParams, $location, Email, $http, $cookies) {

    $scope.panelVisibility = 'desktop';

    // Get the item data by route parameter
    var getItem = function() {

      Email.read($routeParams.itemId, function(slack) {
        $scope.item = slack;
      }, function(error) {
        console.error('404: Email not found');
        $location.path('/');
      });
    };

    // Toggle what format is viewable
    $scope.show = function(type) {
      $scope.panelVisibility = type;
    };

    // Sends a DELETE request to the server
    $scope.delete = function(item) {

      Email.delete({ id: item.id });
    };

    // Initialize the view by getting the email
    getItem();
  }
]);
