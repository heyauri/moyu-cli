# moyu-cli
一个用来摸鱼的npm包, 通过让屏幕上不停闪过特定的信息流来假装电脑在处理一些复杂计算， 从而让使用者手中亮起来的手机屏幕看起来不那么刺眼

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
    download                   Mode: output a fake, file-download like info-stream

```

## Example

![](assets/md.gif)

`moyu-cli -m sp -d 30`

Call out a progress bar that will last for approximately 30 seconds.

`moyu-cli -m webpack -d 10 -r 3`

Call out a webpack-dev-server-like infomation stream that will repeat three times and each may last for approximately 10 seconds.

`moyu-cli -m download -d 20 -r -1`

Call out a webpack-dev-server-like infomation stream that will repeat until a terminal signal is received  and each times may last for approximately 20 seconds.

## Suggestion

In practice, in order to run this program properly (i.e. more similar to a usual program that takes time to process), the user may have to set an appropriate duration time with more repeat, insead of setting a extreamely large duration time but only process once.


