"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moyu = void 0;
var progress_1 = require("./progress");
var help_1 = require("./help");
function moyu(options) {
    if (options["target"] === "help") {
        help_1.logHelpMsg();
        return;
    }
    switch (options["mode"]) {
        case "bar":
            progress_1.progressBar(options);
            break;
    }
}
exports.moyu = moyu;
