#!/usr/bin/env node

let argv = process.argv;
let moyu = require("./lib/index").moyu;

let options = {
    target:"exec",
    duration:100,
    mode:"bar",
    repeat:1,
    focus:false
};



let getOptions = function(){
    let tStr;
    if(argv.length ===2 ){
        options["target"]="help";
        return;
    }
    for (let i = 2; i<argv.length;i++){
        let c = argv[i];
        switch (c) {
            case "-h":
            case "--help":
                options["target"]="help";
                return;
            case "-d":
            case "--duration":
                if(i+1>=argv.length) break;
                tStr = argv[i+1];
                options["duration"] = Number(tStr) || 300;
                break;
            case "-r":
            case "--repeat":
                if(i+1>=argv.length) break;
                tStr = argv[i+1];
                options["repeat"] = Number(tStr) || 1;
                break;
            case "-m":
            case "--mode":
                if(i+1>=argv.length) break;
                options["mode"] = argv[i+1];
                break;
            case "-f":
            case "--focus":
                options["focus"] = true;
                break;
            default:
                break;
        }
    }
};

getOptions();
moyu(options);