/**
 * Module for a simple logger
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

// ########### pre defined code

// This is the logger array
var _log = [];

// This is the default code map codeMap[0] is 'info' o.s.v.
// It maps status code against status type
var _codeMap = [];
_codeMap.push("info");
_codeMap.push("warning");
_codeMap.push("debug");
_codeMap.push("fatal error");
_codeMap.push("system");

// ########### pre defined code ends

/**
 * This function writes to the log. If typeNumber is missing
 * it should save it as a 'info-message'/ the first in _codeMap
 * @param {string} message - the message to log
 * @param {Number} type - type of the message which is translated against the code map
 */
exports.write = function(message, typeNumber) {
    // your code here
};

/**
 * This function reads from the log.
 * If typeNumber is provided only messages with that status should be shown
 * @param {Number} typeNumber - The type number to show
 * @returns {Array}
 */
exports.read = function(typeNumber) {
    // your code here
};

/**
 * This function clears the log by removing all messages
 */
exports.clear = function() {
    // your code here
};

// ######### private Helper functions - No need to touch
// taken a typeNumber it returns the typeString eg. 0 returns 'info', 1 returns warning
function getTypeString(typeNumber) {
    return _codeMap[typeNumber] || _codeMap[0]; // if typeNumber isn't found send back the first
}

// taken a type string it returns the status code eg. 'info' returns 0, 'xxx' returns 0
function getTypeNumber(typeString) {
    var length = _codeMap.length;

    // use a plain for-loop, forEach can't break/return;
    for (var i = 0; i < length; i++) {
        if (_codeMap[i] === typeString) {
            return i;
        }
    }

    return 0; // if status string isn't found return 0
}
