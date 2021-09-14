"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var log = console.log;
var fs = require("fs");
var path = require("path");
var exts = ["gz", "zip", "rar", "7z"];
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
