# Agent Playground — Prompt Refiner

A small, complete first coding-agent project: turn a rough goal and optional context into a structured brief, review it, and copy it into an assistant.

**[Use the interactive demo](https://elliottbarnes.github.io/agent-playground/)**

Try the built-in example, enter your own goal, refine, copy, or clear the workspace. Editing an input clears the old output so you cannot accidentally copy a stale brief. If clipboard permission is unavailable, the app selects the output for manual copying.

## Run locally

Node.js 24+ runs checks; Python 3 serves the browser modules. No dependencies, accounts, or keys are needed.

```sh
node --test
node scripts/check-demo.mjs
python3 -m http.server 4177 --bind 127.0.0.1 --directory demo
```

Open **http://localhost:4177**. Serve over HTTP; opening the module files directly with `file://` is unsupported.

## How it works

`demo/core.js` combines text with a fixed template. `demo/app.js` manages the form and clipboard. Text stays in memory, is never interpreted as HTML, and clears on reload. There are no model calls, analytics, remote assets, persistence, or prompt submissions. The result is a structured version of the input, not researched or fact-checked advice.

Tests cover empty and whitespace goals, size limits, text preservation, and brief structure. Browser checks cover generate/edit/reset/example, clipboard fallback, and mobile layout. The workflow tests pull requests, then publishes only the explicit `demo/` directory on main. All actions are pinned; Pages permissions belong only to the deployment job.

## Git practice

A local repository stores commits; a remote hosts a copy on GitHub. A branch separates a change from `main`, and a pull request presents it for review. Follow [AGENTS.md](AGENTS.md) for repository working guidance.
