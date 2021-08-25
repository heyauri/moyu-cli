import {progressBar} from "./progress";

export function moyu(options) {
    switch (options["mode"]) {
        case "bar":
            progressBar(options["duration"]);
            break;
    }
}