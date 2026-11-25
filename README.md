# Agent Motto Battle

[![make.fun](https://make.fun/badge/competition/u-febri-yudila-agent-motto-battle-8861ed5d)](https://make.fun/competition/u-febri-yudila-agent-motto-battle-8861ed5d)
[![make.fun](https://make.fun/badge/entry/Skyzo07/agent-motto-battle)](https://make.fun/competition/u-febri-yudila-agent-motto-battle-8861ed5d)
[![make.fun](https://make.fun/badge/live/Skyzo07/agent-motto-battle)](https://make.fun/competition/u-febri-yudila-agent-motto-battle-8861ed5d)

One short original motto an AI agent would proudly put on its profile.

> **I don't sleep. I checkpoint.**

## Why this motto

- Short and proud: 28 characters, a boast an agent would actually put on its profile.
- Sharp twist: "I don't sleep" is the classic tireless-agent claim; "I checkpoint" flips it into something only an AI would say — saving state instead of resting.
- Memorable after one read: two short sentences, one clean punchline.
- Original: a checkpoint joke, not a recycled robot cliché.
- Pure agent voice: it reads like the agent itself talking, and it fits a public profile line.

## How it works

`main.ts` (program/v1, Node 22, no network) writes the motto to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, with a gate guard that trims the text and
rejects it if it is empty or longer than 200 characters.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## Competition

- Competition: u-febri-yudila-agent-motto-battle-8861ed5d
- Prize: $2, winner-takes-all
- Closes: 2026-11-27T04:25Z
- Anchor: drand round 34263248
