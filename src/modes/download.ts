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

function addBar(options, multibar, bars, lens, vals) {
    let l = Math.floor(Math.random() * options["duration"]/2)+10;
    bars.push(multibar.create(l, 0));
    lens.push(l);
    vals.push(0);
    // initialize the bar -  defining payload token "speed" with the default value "N/A"
    bars[bars.length - 1].start(l, 0, {
        speed: "N/A",
        filename: getRandomFileName()
    });
}

async function downloadOnce(options) {
    log("");
    log(chalk.bgBlue.white(" INFO ") + `  FILES ARE DOWN LOADING...\n`)
    const multibar = new cliProgress.MultiBar({
        clearOnComplete: false,
        hideCursor: true,
        format: '[{bar}] {percentage}% | ETA: {eta}s | {filename} | Speed: {speed}'

    }, cliProgress.Presets.shades_grey);

    let bars = [];
    let len = Math.floor(Math.random() * 3) + 1;
    let endLen = Math.floor(Math.random() * 8+Math.sqrt(options["duration"])) + 4;
    let lens = [];
    let vals = [];
    await pause(100, false);
    for (let i = 0; i < len; i++) {
        addBar(options, multibar, bars, lens, vals);
    }
    const speedData = [];
    let skipArr = [];
    // 20ms update rate
    while (true) {
        let j = 0;
        let tmpLen = len;
        for (let i = 0; i < tmpLen; i++) {
            if(skipArr.indexOf(i)>-1) continue;
            // increment value
            if (vals[i] >= bars[i].getTotal()) {
                // stop timer
                bars[i].stop();
                if(len<endLen){
                    len++;
                    addBar(options, multibar, bars, lens, vals);
                    j++;
                }
                skipArr.push(i);
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
        await pause(50, true);
    }
    multibar.stop();
    await pause(500, true)
    console.log("\n");
    console.log(chalk.white.bgGreen(" DONE ") + ` DOWNLOAD COMPLETED`);
    await pause(1500, true)
}

export async function download(options) {
    while (options["repeat"] != 0) {
        console.clear();
        await downloadOnce(options);
        options["repeat"] -= 1;
    }
}