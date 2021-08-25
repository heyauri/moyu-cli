#!/usr/bin/env node

let argv = process.argv;
let moyu = require("./lib/index").moyu;

let options = {
    duration:300,
    mode:"bar"
};

for (let i = 2; i<argv.length;i++){
    let c = argv[i];
    switch (c) {
        case "-t":
            if(i+1>=argv.length) break;
            let tStr = argv[i+1];
            options["duration"] = Number(tStr) || 300;
            break;
        default:
            break;
    }
}

moyu(options);