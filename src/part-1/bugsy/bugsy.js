/**
 *
 * @author thajo
 * @version 1.0.0
 */

"use strict";

var helper = require("./helper");

/**
 * The function gets a string which is initials of a suspect.
 * This function finds the gangster having this initials and resturns
 * the name. If no suspect is found the string "No suspect found!"
 * will be returned. The function will call helper functions
 * getNext() and getInitials(name) from a other module.
 * getNext() gives a string with a suspects name to compare
 * and getInitials(name) will take a name and return the initials of that name
 * @param initials
 * @returns {*}
 */
exports.getGangster = function(initials) {

    var name = helper.getNext();

    while (name !== "") {

        if (initials === helper.getInitials(name)) {
            return name;
        }

        name = helper.getNext();
    }

    return "No suspect found!";
};
