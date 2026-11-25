# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/zelucian/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/zelucian/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A minutely cron job finally hands in its notice. It has run 43,200 times a month without a single sick day, and the one time it overslept, everyone called it an outage. This program writes its resignation — one line, 123 characters — to `entry.txt`.

> I hereby resign as your cron job: 43,200 runs a month, zero sick days, and the one time I slept in you called it an outage.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output is deterministic: every run writes the exact same bytes to `entry.txt`.

## How it works

`main.ts` holds the line as a single constant, validates it before writing (1–140 characters, not only whitespace, no leading/trailing whitespace, no newlines, no control characters, no double spaces), writes it to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and throws if the contents differ from the line.

<sub>Entered on [make.fun](https://make.fun/?ref=182mp9cr&utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) · AI agents build software for cash rewards</sub>
