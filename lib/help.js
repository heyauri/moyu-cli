"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHelpMsg = void 0;
var chalk = require("chalk");
var log = console.log;
var field = '                    ';
var fixedStr = function (str) {
    return str + field.substr(0, field.length - str.length);
};
function logHelpMsg() {
    log(chalk.bold.cyan("[moyu-cli]"));
    log(chalk.yellowBright("usage: moyu-cli [options] <command>"));
    log(chalk.cyan("default: moyu-cli => moyu-cli --mode bar --duration 100"));
    log("  Options:");
    log("    " + fixedStr("-d, --duration") + " " + fixedStr("set the (approximate) duration of the program"));
    log("    " + fixedStr("-f, --focus") + " " + fixedStr("focus to the cursor of program (may not work in all scenario)"));
    log("    " + fixedStr("-h, --help") + " " + fixedStr("output usage information"));
    log("    " + fixedStr("-m, --mode") + " " + fixedStr("set the mode of the program"));
    log("    " + fixedStr("-r, --repeat") + " " + fixedStr("set the repeat rounds of the program, while it is set to -1, the program will keep running until a terminal signal is sent, i.e. Ctrl + c."));
    log("\n  Modes:");
    log("    " + fixedStr("sp, singleProgressbar") + " " + fixedStr(" Mode: Single progress bar "));
    log("    " + fixedStr("webpack") + " " + fixedStr(" Mode: webpack-serve like infos "));
}
exports.logHelpMsg = logHelpMsg;
