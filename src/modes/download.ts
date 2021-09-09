import { clearline, pause, fixedStr, words } from "../utils";
import * as cliProgress from "cli-progress";
import * as chalk from "chalk";


const fs = require("fs");
const path = require("path");

const log = console.log;


let exts = ["html", "css", "ts", "json", "js", "jpg", "png", "zip", "rar", "7z"];
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


async function downloadOnce(options) {
    log("");
    log(chalk.bgBlue.white(" INFO ") + `  FILES ARE DOWN LOADING...\n`)
    const multibar = new cliProgress.MultiBar({
        clearOnComplete: false,
        hideCursor: true,
        format: '[{bar}] {percentage}% | ETA: {eta}s | {filename} | Speed: {speed}'

    }, cliProgress.Presets.shades_grey);

    let bars = [];
    let len = Math.floor(Math.random() * options["duration"] / 3) + 2;
    let lens = [];
    let vals = [];
    console.log(len);
    await pause(100,false);
    for (let i = 0; i < len; i++) {
        let l = Math.floor(Math.random() *options["duration"]);
        bars[i] = multibar.create(l, 0);
        lens[i] = l;
        vals[i] = 0;
        // initialize the bar -  defining payload token "speed" with the default value "N/A"
        bars[i].start(l, 0, {
            speed: "N/A",
            filename: getRandomFileName()
        });
    }
    const speedData = [];
    // 20ms update rate
    while (true) {
        let j = 0;
        for (let i = 0; i < len; i++) {
            // increment value
            if (vals[i] >= bars[i].getTotal()) {
                // stop timer
                bars[i].stop();
                continue;
            }
            vals[i]++;
            // example speed data
            speedData.push(Math.random() * 3 + 1);
            const currentSpeedData = speedData.splice(-10);

            // update the bar value
            bars[i].update(vals[i], {
                speed: (currentSpeedData.reduce(function (a, b) { return a + b; }, 0) / currentSpeedData.length).toFixed(2) + "mb/s"
            });

            // set limit
            j++;
        }
        if (j === 0) {
            break
        }
        await pause(50,true);
    }
    multibar.stop();
    await pause(1000,true)
    console.log("\n");
    console.log(chalk.white.bgGreen(" DONE ")+` DOWNLOAD COMPLETED`);
}

export async function download(options) {
    while(options["repeat"]!=0){
        console.clear();
        await downloadOnce(options);
        options["repeat"]-=1;
    }
    return true;
}