(function () {
    'use strict'

    angular
        .module('notesApp')
        .factory('factoryService', ['localStorageService', 'orderByFilter', function (localStorageService, orderBy) {

            let validateNote = function (noteObj) {

                if (noteObj.title === "" || noteObj.description === "") {
                    return false;
                }
                return true;
            };

            let createNote = function (noteObj) {

                noteObj.id = Date.now();
                noteObj.creationDate = new Date();
                noteObj.updatedDate = new Date();
                notes.push(noteObj);
                localStorageService.saveData(notes);

            };

            let findNoteIndex = function (noteObj) {
                for (let count = 0; count < notes.length; count++) {
                    if (notes[count].id === noteObj.id)
                        return count;
                }
            };

            let updateNote = function (noteObj) {
                let index = findNoteIndex(noteObj);
                let list = localStorageService.readData();

                noteObj.updatedDate = new Date();
                list[index] = noteObj;

                localStorageService.saveData(list);
            };

            let sortBy = function (property, reverse) {
                console.log(property, reverse);
                let notes = getNotes();

                return orderBy(notes, property, reverse);

            };


            let saveNotes = function (noteObj) {
                if (validateNote(noteObj) === false) {
                    return;
                }
                if (!noteObj.id) {
                    createNote(noteObj);
                } else {
                    updateNote(noteObj);
                }
            };

            let getNotes = function () {
                return localStorageService.readData();
            };
            let getNoteById = function (id) {
                let notes = localStorageService.readData();
                for (let count = 0; count < notes.length; count++) {
                    if (notes[count].id === Number(id)) {
                        return notes[count];
                    }

                }

            };
            let getNote = function (index) {
                let notes = getNotes();
                return notes[index];
            };

            let deleteItem = function (id) {
                localStorageService.removeData(id);
            };
            let clearAllNotes = function () {
                localStorageService.clearAllNotes();
            };

            let notes = getNotes();

            return {

                getNoteById: getNoteById,
                validateNote: validateNote,
                getNotes: getNotes,
                getNote: getNote,
                saveNotes: saveNotes,
                deleteItem: deleteItem,
                clearAllNotes: clearAllNotes,
                sortBy: sortBy
            };
        }]);

})();