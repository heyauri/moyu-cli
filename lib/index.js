"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moyu = void 0;
var progress_1 = require("./progress");
function moyu(options) {
    switch (options["mode"]) {
        case "bar":
            progress_1.progressBar(options["duration"]);
            break;
    }
}
exports.moyu = moyu;
