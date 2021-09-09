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
exports.download = void 0;
var utils_1 = require("../utils");
var cliProgress = require("cli-progress");
var chalk = require("chalk");
var fs = require("fs");
var path = require("path");
var log = console.log;
var exts = ["html", "css", "ts", "json", "js", "jpg", "png", "zip", "rar", "7z"];
var getRandomFileName = function () {
    var rnd = 1 + Math.floor(Math.random() * 2);
    var arr = [];
    while (rnd > 0) {
        var rw = utils_1.words[Math.floor(Math.random() * utils_1.words.length)];
        if (arr.indexOf(rw) > -1)
            continue;
        arr.push(rw);
        rnd--;
    }
    return arr.join("-") + "." + exts[Math.floor(Math.random() * exts.length)];
};
var fakeBaseDir = __dirname.split(path.sep).map(function (i) { return utils_1.words[Math.floor(Math.random() * utils_1.words.length)]; }).join(path.sep);
function downloadOnce(options) {
    return __awaiter(this, void 0, void 0, function () {
        var multibar, bars, len, lens, vals, i, l, speedData, j, i, currentSpeedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    log("");
                    log(chalk.bgBlue.white(" INFO ") + "  FILES ARE DOWN LOADING...\n");
                    multibar = new cliProgress.MultiBar({
                        clearOnComplete: false,
                        hideCursor: true,
                        format: '[{bar}] {percentage}% | ETA: {eta}s | {filename} | Speed: {speed}'
                    }, cliProgress.Presets.shades_grey);
                    bars = [];
                    len = Math.floor(Math.random() * options["duration"] / 3) + 2;
                    lens = [];
                    vals = [];
                    console.log(len);
                    return [4, utils_1.pause(100, false)];
                case 1:
                    _a.sent();
                    for (i = 0; i < len; i++) {
                        l = Math.floor(Math.random() * options["duration"]);
                        bars[i] = multibar.create(l, 0);
                        lens[i] = l;
                        vals[i] = 0;
                        bars[i].start(l, 0, {
                            speed: "N/A",
                            filename: getRandomFileName()
                        });
                    }
                    speedData = [];
                    _a.label = 2;
                case 2:
                    if (!true) return [3, 4];
                    j = 0;
                    for (i = 0; i < len; i++) {
                        if (vals[i] >= bars[i].getTotal()) {
                            bars[i].stop();
                            continue;
                        }
                        vals[i]++;
                        speedData.push(Math.random() * 3 + 1);
                        currentSpeedData = speedData.splice(-10);
                        bars[i].update(vals[i], {
                            speed: (currentSpeedData.reduce(function (a, b) { return a + b; }, 0) / currentSpeedData.length).toFixed(2) + "mb/s"
                        });
                        j++;
                    }
                    if (j === 0) {
                        return [3, 4];
                    }
                    return [4, utils_1.pause(50, true)];
                case 3:
                    _a.sent();
                    return [3, 2];
                case 4:
                    multibar.stop();
                    return [4, utils_1.pause(1000, true)];
                case 5:
                    _a.sent();
                    console.log("\n");
                    console.log(chalk.white.bgGreen(" DONE ") + " DOWNLOAD COMPLETED");
                    return [2];
            }
        });
    });
}
function download(options) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(options["repeat"] != 0)) return [3, 2];
                    console.clear();
                    return [4, downloadOnce(options)];
                case 1:
                    _a.sent();
                    options["repeat"] -= 1;
                    return [3, 0];
                case 2: return [2, true];
            }
        });
    });
}
exports.download = download;
