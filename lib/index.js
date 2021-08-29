"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moyu = void 0;
var progress_1 = require("./progress");
var help_1 = require("./help");
var findMode = function (inStr) {
    switch (inStr) {
        case "sp":
        case "singleProgressBar":
            return progress_1.progressBar;
        default:
            return false;
    }
};
function moyu(options) {
    if (options["target"] === "help") {
        help_1.logHelpMsg();
        return;
    }
    var prog = findMode(options["mode"]);
    if (!prog) {
        console.log("Mode configuration is not valid");
        help_1.logHelpMsg();
    }
    else {
        prog(options);
    }
}
exports.moyu = moyu;
