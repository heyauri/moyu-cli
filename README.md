# moyu-cli
A npm package used for moyu, a meaningful activity which is also named as touch-fish.

## Installation
```javascript
npm install moyu-cli -g
```

## Usage
Use the command `moyu-cli -h` in terminal directly to view the latest guide of this package.

```bash
usage: moyu-cli [options] <command>
  Options:
    -d, --duration             set the (approximate) duration of the program
    -f, --focus                focus to the cursor of program (may not work in all scenario)
    -h, --help                 output usage information  
    -m, --mode                 set the mode of the program
    -r, --repeat               set the repeat rounds of the program, while it is set to -1, the program will keep running until a terminal signal is sent, i.e. Ctrl + c.

  Modes:
    sp, singleProgressbar      Mode: Single progress bar 
    webpack                    Mode: output a fake, webpack-serve like info-stream 

```

