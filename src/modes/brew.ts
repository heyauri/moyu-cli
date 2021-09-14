import { clearline, pause, fixedStr, words } from "../utils";
import * as cliProgress from "cli-progress";
import * as chalk from "chalk";
let log = console.log;
const fs = require("fs");
const path = require("path");


let exts = ["gz", "zip", "rar", "7z"];
let getRandomFileName = function () {
    let rnd = 1 + Math.floor(Math.random() * 2);
    let arr = [];
    while (rnd > 0) {
        let rw = words[Math.floor(Math.random() * words.length)];
        if (arr.indexOf(rw) > -1) continue;
        arr.push(rw);
        rnd--;
    }
    return arr.join("-") + "." + exts[Math.floor(Math.random() * exts.length)];
};

let fakeBaseDir = __dirname.split(path.sep).map(i => { return words[Math.floor(Math.random() * words.length)] }).join(path.sep);
