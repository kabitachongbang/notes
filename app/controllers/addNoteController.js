(function () {
    'use strict'

    angular
        .module('notesApp')
        .controller('AddNoteController', AddNoteController);

    AddNoteController.$inject = ['$scope', '$location', '$routeParams', 'factoryService'];

    function AddNoteController($scope, $location, $routeParams, factoryService) {

        let id = $routeParams.id;

        if (id === undefined) {
            $scope.noteObj = {};
        } else {
            $scope.noteObj = factoryService.getNoteById(id);

        }



        $scope.saveNotes = function (noteObj1) {

            factoryService.saveNotes(noteObj1);
            $location.path('/');
            $scope.clearNotes();
        };

        $scope.clearNotes = function () {
            $scope.noteObj = {};
        };


    };

})(); 