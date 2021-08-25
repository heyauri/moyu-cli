import * as cliProgress from "cli-progress";
import * as chalk from "chalk";

export function progressBar(duration){
    const b1 = new cliProgress.SingleBar({});
    b1.start(100,0,{});
    let i = 0;
    function _() {
        b1.increment();
        i++;
        if(i<100){
            setTimeout(_,(duration*1000)/100)
        }else{
            b1.stop();
        }
    }
    _();
}