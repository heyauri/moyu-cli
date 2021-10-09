"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webpack = void 0;
var utils_1 = require("../utils");
var chalk = require("chalk");
var log = console.log;
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var dirPackages = fs.readdirSync(path.join(__dirname, "../../node_modules"));
var dirWords = {};
for (var _i = 0, dirPackages_1 = dirPackages; _i < dirPackages_1.length; _i++) {
    var dir = dirPackages_1[_i];
    dir.split("-").map(function (w) {
        dirWords[w] = 1;
    });
}
var getRandomDirName = function () {
    var rnd = 1 + Math.floor(Math.random() * 4);
    var arr = [];
    while (rnd > 1) {
        var rw = utils_1.words[Math.floor(Math.random() * utils_1.words.length)];
        if (arr.indexOf(rw) > -1)
            continue;
        arr.push(rw);
        rnd--;
    }
    return arr.join("-");
};
var exts = ["html", "css", "ts", "json", "js"];
var getRandomFileName = function () {
    var rnd = 2 + Math.floor(Math.random() * 2);
    var arr = [];
    while (rnd > 0) {
        var rw = utils_1.words[Math.floor(Math.random() * utils_1.words.length)];
        if (arr.indexOf(rw) > -1 || rw.length == 0)
            continue;
        arr.push(rw);
        rnd--;
    }
    return arr.join("/") + "." + exts[Math.floor(Math.random() * exts.length)];
};
var fakeBaseDir = utils_1.getFakeBaseDir();
var constructLines = function (max) {
    var baseDir = fakeBaseDir;
    var i = 0;
    var res = [];
    var upper = Math.floor(0.8 * max);
    while (i < upper) {
        for (var j = 0; j < Math.random() * Math.sqrt(max) + 3; j++) {
            var str = Math.floor(i / max * 100) + "% building " + i + "/" + upper + " " + Math.floor(Math.sqrt(i)) + " is active ";
            str += " " + (path.join(baseDir, "node_modules", getRandomDirName()) + "/" + getRandomFileName());
            res.push(str);
        }
        i++;
    }
    res.push("81% chunk graph");
    res.push("88% hashing");
    res.push("92% chunk assets processing");
    res.push("93% recording HotModuleReplacementPlugin");
    res.push("95% emitting CopyPlugin");
    return res;
};
var webpackOnce = function (options) {
    return __awaiter(this, void 0, void 0, function () {
        var st, pm, duration, max, lines, i, et;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    st = new Date();
                    log("");
                    pm = utils_1.words[Math.floor(Math.random() * utils_1.words.length)];
                    log("> " + pm + "@0.1.2 serve " + fakeBaseDir);
                    log("> " + pm + " serve\n");
                    return [4, utils_1.pause(500, true)];
                case 1:
                    _a.sent();
                    log(chalk.bgBlue.white.bold(" INFO ") + " Starting development server...\n");
                    return [4, utils_1.pause(500, true)];
                case 2:
                    _a.sent();
                    duration = options["duration"];
                    max = Math.floor(duration * (1 + Math.random() * 2));
                    lines = constructLines(max);
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < lines.length)) return [3, 6];
                    utils_1.clearline();
                    process.stdout.write(lines[i]);
                    readline.cursorTo(process.stdout, lines[i].length);
                    return [4, utils_1.pause(40, true)];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3, 3];
                case 6:
                    et = new Date();
                    log("\n");
                    log(chalk.bgGreen.white.bold(" DONE ") + chalk.green(" Compiled successfully in " + (et.getTime() - st.getTime()) + "ms"));
                    log("\n");
                    log("   App running at:");
                    log("   " + utils_1.fixedStr("- Local:") + chalk.cyan("http://localhost:8080"));
                    log("   " + utils_1.fixedStr("- Network:") + chalk.gray("http://localhost:8080"));
                    log();
                    log("   Note thst the development build is not optimized.");
                    log("   To create a productionbuild, run " + chalk.cyan("npm run build"));
                    log("\n");
                    return [4, utils_1.pause(1000, true)];
                case 7:
                    _a.sent();
                    return [2];
            }
        });
    });
};
function webpack(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(options["repeat"] != 0)) return [3, 2];
                    console.clear();
                    return [4, webpackOnce(options)];
                case 1:
                    _a.sent();
                    options["repeat"] -= 1;
                    return [3, 0];
                case 2: return [2];
            }
        });
    });
}
exports.webpack = webpack;
