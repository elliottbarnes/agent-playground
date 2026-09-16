# Agent Playground — Prompt Refiner

A tiny first project for learning coding agents, Git branches, and pull requests. Prompt Refiner turns a rough goal and optional context into a structured brief you can copy into an assistant.

## Run locally

Open `index.html` in a browser. No installation, server, account, or API key is needed.

Enter a goal, optionally add constraints, and select **Refine my prompt**. Select and copy the generated text to use it elsewhere.

## How it works

This tool is AI-inspired, not AI-powered: JavaScript combines your input with a fixed template. It does not call a model, send network requests, or save your input. Reloading clears the form.

All HTML, styles, and logic live in `index.html`. Inputs are treated as text, not executable HTML. Follow `AGENTS.md` when making changes.

## Git practice

A local repository stores commits on your Mac; a remote hosts a copy on GitHub. A branch keeps changes separate from `main`, and a pull request presents those changes for review before merging.

For a manual check, try a normal goal, optional context, and an empty or whitespace-only goal. Confirm that the output preserves your text and empty goals are rejected.
