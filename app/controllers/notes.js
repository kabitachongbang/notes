(function () {
    'use strict'

    angular
        .module('notesApp')
        .controller('MainCtrl', ['$scope', 'factoryService', function ($scope, factoryService) {

            /*  $scope.notes = [];
             $scope.noteObj = { title: '', description: '' };
             $scope.showNotes = false;
             $scope.createNotes = function () {
                 $scope.showNotes = true;
             }; */
            $scope.saveNotes = function () {
                factoryService.saveNotes($scope.noteObj);
                $scope.notes = factoryService.getNotes();
                console.log($scope.notes);
                $scope.noteObj = {};
            };
            $scope.clearNotes = function () {
                $scope.noteObj = {};
            };


        }]);

})();