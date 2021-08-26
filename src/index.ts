import {progressBar} from "./progress";
import {logHelpMsg} from "./help";

export function moyu(options) {
    if(options["target"]==="help"){
        logHelpMsg();
        return;
    }
    switch (options["mode"]) {
        case "bar":
            progressBar(options);
            break;
    }
}