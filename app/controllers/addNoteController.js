(function () {
    'use strict'

    angular
        .module('notesApp')
        .controller('AddNoteController', AddNoteController);

    AddNoteController.$inject = ['$scope', '$location', '$routeParams', 'factoryService'];

    function AddNoteController($scope, $location, $routeParams, factoryService) {
        let index = $routeParams.index;

        if (index === undefined) {
            $scope.noteObj = {};
        } else {
            $scope.noteObj = factoryService.getNote(index);
        }

        $scope.saveNotes = function () {
            factoryService.saveNotes($scope.noteObj);
            $location.path('/');
            $scope.clearNotes();
        };

        $scope.clearNotes = function () {
            $scope.noteObj = {};
        };


    };

})(); 