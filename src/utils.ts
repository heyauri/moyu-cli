const readline = require("readline");

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

export function clearline(){
    readline.cursorTo(process.stdout,0);
    readline.clearLine(process.stdout,1);
}