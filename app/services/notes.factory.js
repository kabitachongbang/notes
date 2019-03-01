(function () {
    'use strict'

    angular
        .module('notesApp')
        .factory('factoryService', ['localStorageService', function (localStorageService) {

            let saveNotes = function (noteObj) {
                let notes = getNotes();

                if (noteObj.title === "" || noteObj.description === "") {
                    return;
                } else {
                    notes.push(noteObj);
                }
                localStorageService.saveData(notes);
            };

            let getNotes = function () {
                return localStorageService.readData();
            };

            let getNote = function (index) {
                let notes = getNotes();
                return notes[index];
            };

            let deleteItem = function (index) {
                localStorageService.removeData(index);
            };

            return {
                getNotes: getNotes,
                getNote: getNote,
                saveNotes: saveNotes,
                deleteItem: deleteItem
            };
        }]);

})();