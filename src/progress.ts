import * as cliProgress from "cli-progress";
import * as chalk from "chalk";

let log = console.log;


function oneBar(duration) {
    return new Promise((resolve, reject) => {
        const b1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
        b1.start(100, 0, {});
        let i = 0;
        function _() {
            b1.increment();
            i++;
            if (i < 100) {
                setTimeout(_, (duration * 1000) / 100)
            } else {
                b1.stop();
                resolve(true);
            }
        }
        _();
    });
}

export async function progressBar(options) {
    console.clear();
    log(chalk.bold.cyanBright("[Node.js]"));
    log(chalk.yellowBright("- The program is processing:"));
    let duration = options["duration"]||100;
    let repeat = options["repeat"]||1;
    let i = 0;
    while(true){
        if(repeat==i){
            break;
        }else if(repeat==1){
            await oneBar(duration);
        }else{
            log(chalk.greenBright(` STEP ${i+1}:`));
            await oneBar(duration);

        }
        i++;
        log(`${chalk.blueBright(" DONE ")} Process complete.`)
    }
}