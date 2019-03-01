(function () {
    'use strict'

    angular
        .module('notesApp')
        .controller('NoteListController', NoteListController);

    NoteListController.$inject = ['$scope', '$location', 'factoryService'];

    function NoteListController($scope, $location, factoryService) {

        $scope.notes = factoryService.getNotes();
        $scope.noteObj = { title: '', description: '', id: '' };


        $scope.createNotes = function () {
            $location.path('/addNote');
        };

        $scope.editItem = function (index) {
            $location.path('/addNote/' + index);
        };


        $scope.deleteItem = function (index) {
            factoryService.deleteItem(index);
            $scope.notes = factoryService.getNotes();
        };
    }

})(); 