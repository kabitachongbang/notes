(function () {
    'use strict'

    angular.module('notesApp', ['ngRoute']);

    angular.module('notesApp').config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/templates/noteList.html',
                controller: 'NoteListController'
            })
            .when('/addNote/:index?', {
                templateUrl: 'app/templates/addNote.html',
                controller: 'AddNoteController'
            })
            .when('/viewNote/:index', {
                templateUrl: 'app/templates/viewNote.html',
                controller: 'ViewNoteController'
            });

        // configure html5 to get links working on jsfiddle
        // $locationProvider.html5Mode(true);
    });


})(); 