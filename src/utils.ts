const readline = require("readline");
const fs = require("fs");
const path = require("path");
const crypto = require('crypto');


let field = '                    ';
export let fixedStr = function (str) {
    return str + field.substr(0, field.length - str.length);
};

export async function pause(duration, ran) {
    ran == true ? duration = duration + Math.floor(Math.random() * duration) : "";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, duration)
    })
}


let dirPackages = fs.readdirSync(path.join(__dirname, "../node_modules"));
let dirWords = {};
for (let dir of dirPackages) {
    dir.split("-").map(w => {
        dirWords[w] = 1;
    });
}
let words = Object.keys(dirWords);
let ws = fs.readFileSync(path.join(__dirname, "../assets/ws")).toString();
let tmp = words.concat(ws.split("\n"));
words = [];
for(let w of tmp){
    if(w.length<1 || w=="") continue;
    words.push(w);
}


export function clearline() {
    readline.cursorTo(process.stdout, 0);
    readline.clearLine(process.stdout, 1);
}


export function sha256(str) {
    //var obj=crypto.createHash('md5');
    let obj = crypto.createHash('sha256');
    obj.update(str);
    return obj.digest('hex');//hex是十六进制
}

export { words };