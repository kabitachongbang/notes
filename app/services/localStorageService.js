(function () {
    'use strict';
    angular
        .module('notesApp')
        .factory('localStorageService', function () {
            let saveData = function (list) {
                localStorage.setItem('list', JSON.stringify(list));
            };
            let readData = function () {
                let listString = localStorage.getItem('list');

                if (listString === null || listString === undefined) {
                    return [];
                }

                return JSON.parse(listString);

            };
            let removeData = function (id) {
                let index = null;
                let tempData = readData();
                for (let count = 0; count < tempData.length; count++) {
                    if (tempData[count].id === Number(id)) {
                        index = count;
                        break;
                    }
                }

                tempData.splice(index, 1);
                saveData(tempData);

            };
            let clearAllNotes = function () {
                localStorage.clear();
            }
            return {
                saveData: saveData,
                readData: readData,
                removeData: removeData,
                clearAllNotes: clearAllNotes
            };
        });

})();