(function () {
    'use strict'
    angular.module('notesApp')
        .controller('ViewNoteController', ViewNoteController);

    ViewNoteController.$inject = ['$scope', '$location', '$routeParams', 'factoryService'];
    function ViewNoteController($scope, $location, $routeParams, factoryService) {

        let index = $routeParams.index;

        $scope.noteObj = factoryService.getNote(index);

        $scope.homeNotes = function () {
            $location.path('/');
        };

    }
})();


