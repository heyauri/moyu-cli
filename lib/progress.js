"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressBar = void 0;
var cliProgress = require("cli-progress");
function progressBar(duration) {
    var b1 = new cliProgress.SingleBar({});
    b1.start(100, 0, {});
    var i = 0;
    function _() {
        b1.increment();
        i++;
        if (i < 100) {
            setTimeout(_, (duration * 1000) / 100);
        }
        else {
            b1.stop();
        }
    }
    _();
}
exports.progressBar = progressBar;
