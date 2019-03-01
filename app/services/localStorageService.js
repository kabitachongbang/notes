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
            let removeData = function (index) {
                let tempData = readData();
                tempData.splice(index, 1);
                saveData(tempData);

            };
            return {
                saveData: saveData,
                readData: readData,
                removeData: removeData
            };
        });

})();