var app = angular.module('notesApp', []);
app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.notes = [];
    $scope.noteObj = { title: '', description: '' };
    $scope.showNotes = false;
    $scope.createNotes = function () {
        $scope.showNotes = true;
    };
    $scope.saveNotes = function () {
        if ($scope.noteObj.title === "" && $scope.noteObj.description === "") { return; }
        else {
            $scope.notes.push($scope.noteObj);
            $scope.noteObj = {};
        }
    };
    $scope.deleteNotes = function () {
        $scope.noteObj = '';
    };

}]);