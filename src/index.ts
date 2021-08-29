import {progressBar} from "./progress";
import {logHelpMsg} from "./help";

const findMode = function(inStr){
    switch (inStr) {
        case "sp":
        case "singleProgressBar":
            return progressBar;
        default:
            return false;
    }
};

export function moyu(options) {
    if(options["target"]==="help"){
        logHelpMsg();
        return;
    }
    let prog = findMode(options["mode"]);
    if(!prog){
        console.log("Mode configuration is not valid");
        logHelpMsg();
    }else {
        prog(options);
    }
}