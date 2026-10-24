---
name: copyedit-post
description: Copyedit a blog post in src/data/post/ before publishing, one issue at a time with multiple-choice fixes so the author sees every change. Use when asked for copywriter editing, proofreading, or a grammar and spelling pass on a post.
---

# Copyedit a post

Goal: catch grammar, spelling, and punctuation problems without changing what the post says or making it sound AI-written. The author approves every change.

## Process

1. Read the whole post, including frontmatter (`title`, `excerpt`).
2. List every issue in document order. Skip headings that are already consistent.
3. Ask with `AskUserQuestion`, up to 4 questions per round, in document order. Do not edit the file until every question is answered.
4. Each question quotes the original text, names the problem in parentheses, and gives 2-3 options. Each option's description is the exact resulting text, not a summary.
5. Apply only the chosen options with one `Write`. Also strip trailing spaces and extra blank lines at the end of the file.
6. Report what was left alone and why, and flag anything that read as a content question.
7. Do not commit, push, tag, or release. Publishing needs a release tag (see CONTEXT.md), and the author decides when.

## Options for each question

- First option: the minimal fix (typo, comma, verb form).
- Second option: a lightly smoothed version.
- Third option: leave it or fix only the typo, when that is a real choice.
- The label must match its text. A label like "Dash" must actually use a dash.
- Keep the author's wording and voice. Do not swap in synonyms or polish into corporate prose. Fragments and spoken beats like "That meant one thing, fire up Claude Code." are style; offer "keep" rather than fixing them.

## Content changes

- Anything that changes a fact or meaning (a technical term, a number, an acronym's expansion, a date) gets its own question and says "this is a factual edit, so your call."
- Never silently fix facts. Flag suspected ones at the end instead if they need research.
- If the author rejects a round to clarify, ask what to clarify. Keep the answers already given and re-ask only what is unresolved.

## House style (decisions made in earlier passes)

- Headings: sentence case.
- Titles: Title Case.
- Product names in their official form: CloudFront, GitHub, GitHub Actions, Hexo, Copilot, Graviton, Wi-Fi, IaC, click-ops.
- Use "set up" as a verb and "setup" as a noun. Fix "it's/its", "which which", and "totaly"-style typos.
- Hyphenate compound modifiers: mind-blowing, high-level, one-shot.
- Missing commas after introductory phrases and before "but" joining two clauses are fixed. Comma splices become two sentences, or a "since/so" join, whichever the author picks.
- Scare quotes stay only where they carry a contrast (for example "looked" versus "code"). Do not strip them without asking.
- A slash in "years/months" or "design/architecture" is casual style; offer to keep it.
- Excerpts: no trailing space, and keep them to complete sentences.
