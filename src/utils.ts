const readline = require("readline");
const fs = require("fs");
const path = require("path");

let field = '                    ';
export let fixedStr = function(str){
    return str+field.substr(0,field.length-str.length);
};

export async function pause(duration,ran){
    ran == true?duration = duration +Math.floor(Math.random()*duration):"";
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },duration)
    })
}


let dirPackages = fs.readdirSync(path.join(__dirname,"../node_modules"));
let dirWords = {};
for(let dir of dirPackages){
    dir.split("-").map(w =>{
        dirWords[w]=1;
    });
}
let words = Object.keys(dirWords);
let ws = fs.readFileSync(path.join(__dirname,"../assets/ws")).toString();
words=words.concat(ws.split("\n"));


export function clearline(){
    readline.cursorTo(process.stdout,0);
    readline.clearLine(process.stdout,1);
}

export {words};