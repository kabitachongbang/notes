(function () {
    'use strict'

    angular
        .module('notesApp')
        .controller('NoteListController', NoteListController);

    NoteListController.$inject = ['$scope', '$location', 'orderByFilter', 'factoryService'];

    function NoteListController($scope, $location, orderBy, factoryService) {
        let notes = factoryService.getNotes();

        $scope.propertyName = 'title';
        $scope.reverse = true;
        $scope.notes = orderBy(notes, $scope.propertyName, $scope.reverse);

        $scope.createNotes = function () {
            $location.path('/addNote');
        };
        $scope.clearAllNotes = function () {
            factoryService.clearAllNotes();
            $scope.notes = factoryService.getNotes();

        };
        $scope.editItem = function (id) {
            $location.path('/addNote/' + id);
        };

        $scope.deleteItem = function (id) {
            factoryService.deleteItem(id);
            $scope.notes = factoryService.getNotes();
        };

        $scope.sortBy = function (property) {

            if (property === null) {
                $scope.reverse = false;
            } else if (property != null || $scope.propertyName === property) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.reverse = false;
            }
            $scope.propertyName = property;
            $scope.notes = factoryService.sortBy($scope.propertyName, $scope.reverse);
        };
    }

})(); 