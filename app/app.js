(function () {
    'use strict'

    angular.module('notesApp', ['ngRoute']);

    angular.module('notesApp').config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/noteList.html',
                controller: 'NoteListController'
            })
            .when('/addNote/:id?', {
                templateUrl: 'app/templates/addNote.html',
                controller: 'AddNoteController'
            });

        // configure html5 to get links working on jsfiddle
        // $locationProvider.html5Mode(true);
    });


})(); 