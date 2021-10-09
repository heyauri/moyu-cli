import {clearline,pause,fixedStr,words,getFakeBaseDir} from "../utils";
import * as cliProgress from "cli-progress";
import * as chalk from "chalk";
let log = console.log;
const fs = require("fs");
const path = require("path");
const readline = require("readline");


let dirPackages = fs.readdirSync(path.join(__dirname,"../../node_modules"));
let dirWords = {};
for(let dir of dirPackages){
    dir.split("-").map(w =>{
        dirWords[w]=1;
    });
}

let getRandomDirName = function(){
    let rnd = 1+Math.floor(Math.random()*4);
    let arr = [];
    while (rnd>1){
        let rw = words[Math.floor(Math.random()*words.length)];
        if(arr.indexOf(rw)>-1) continue;
        arr.push(rw);
        rnd--;
    }
    return arr.join("-")
};

let exts = ["html","css","ts","json","js"];
let getRandomFileName = function(){
    let rnd = 2+Math.floor(Math.random()*2);
    let arr = [];
    while (rnd>0){
        let rw = words[Math.floor(Math.random()*words.length)];
        if(arr.indexOf(rw)>-1||rw.length==0) continue;
        arr.push(rw);
        rnd--;
    }
    return arr.join("/")+"."+exts[Math.floor(Math.random()*exts.length)];
};

let fakeBaseDir = getFakeBaseDir();
  
let constructLines = function(max){
    let baseDir = fakeBaseDir;
    let i = 0;
    let res = [];
    let upper = Math.floor(0.8*max);
    while(i<upper){
        for(let j=0;j<Math.random()*Math.sqrt(max)+3;j++){
            let str = `${Math.floor(i/max*100)}% building ${i}/${upper} ${Math.floor(Math.sqrt(i))} is active `;
            str+=` ${path.join(baseDir,"node_modules",getRandomDirName())+"/"+getRandomFileName()}`;
            res.push(str);
        }
        i++;
    }
    res.push(`81% chunk graph`);
    res.push(`88% hashing`);
    res.push(`92% chunk assets processing`);
    res.push(`93% recording HotModuleReplacementPlugin`);
    res.push(`95% emitting CopyPlugin`);
    return res;
};

const webpackOnce = async function(options){
    let st = new Date();
    log("");
    let pm = words[Math.floor(Math.random()*words.length)];
    log(`> ${pm}@0.1.2 serve ${fakeBaseDir}`);
    log(`> ${pm} serve\n`);
    await pause(500,true);
    log(chalk.bgBlue.white.bold(" INFO ")+` Starting development server...\n`);
    await pause(500,true);
    let duration = options["duration"];
    let max = Math.floor(duration*(1+Math.random()*2));
    let lines = constructLines(max);
    for(let i = 0;i<lines.length;i++){
        clearline();
        process.stdout.write(lines[i]);
        readline.cursorTo(process.stdout, lines[i].length);
        await pause(40,true);
    }
    let et = new Date();
    log("\n");
    log(chalk.bgGreen.white.bold(" DONE ")+chalk.green(` Compiled successfully in ${et.getTime()-st.getTime()}ms`));
    log("\n");
    log(`   App running at:`)
    log(`   ${fixedStr("- Local:")}`+chalk.cyan("http://localhost:8080"));
    log(`   ${fixedStr("- Network:")}`+chalk.gray("http://localhost:8080"));
    log();
    log(`   Note thst the development build is not optimized.`)
    log(`   To create a productionbuild, run `+chalk.cyan("npm run build"));
    log("\n")
    await pause(1000,true);
};

export async function webpack(options) {
    while(options["repeat"]!=0){
        console.clear();
        await webpackOnce(options);
        options["repeat"]-=1;
    }
}