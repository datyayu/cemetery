angular.module('app', [])
  .controller('TodoController', function($scope, $http) {
    $scope.todos = []; // Todos collection
    $scope.todo = {};  // New todo.

    // Request todos from db on controller load.
    $http.get('/todo').success(function(data) {
      $scope.todos = data.reverse();
    });

    // Post a new todo to db.
    $scope.addTodo = function() {
      $http.post('/todo', $scope.todo).success(function(data) {
        $scope.todos.unshift(data);
      });

      // Clean input
      $scope.todo = {};
    };
  });
