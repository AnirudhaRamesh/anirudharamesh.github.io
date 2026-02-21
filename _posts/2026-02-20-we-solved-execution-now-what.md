---
title: "We Solved Execution. Now What?"
date: 2026-02-20
permalink: /blog/we-solved-execution-now-what/
excerpt: "AI solved execution. The bottleneck now is purpose."
tags:
  - AI
  - Execution
  - Purpose
  - Task Scaling
---

Yes yes, solved is generous. But close enough that the real constraint has shifted. People on my team and in my circles who'd spend a lot of time writing code to implement new things, scaffolding projects, processing data and logs, and managing setup and deployments barely have to anymore.

If I had to distill AI progress into a single formula, it would have more variables than most people are paying attention to (and perhaps even more than I've put down here).

y here represents meaningful AI-driven output, how quickly human ambition translates into real results.

```
y = f(compute, hardware, energy, execution, tasks, feedback)
Δy ≤ min(Δcompute, Δhardware, Δenergy, Δexecution, Δtasks, Δfeedback)
```

To hit exponentiation in output y, you need all inputs to scale. Let any one stagnate and y is capped. For a long time, the first three dominated the conversation. More GPUs, faster chips, more energy. Reasonable, since these were clearly the constraints being hit. But buried in that formula are variables that've been quietly left alone. Feedback loops, for one. Some are already instant, test cases pass or fail the moment code runs. But much of it, deployment, distribution, user behavior, still depends on time. And then there are tasks.

---

Historically, execution was done by people. Software engineering, financial modeling, research, the things that took time because they required humans to do them. Project timelines, even with every other input in place, were bottlenecked by engineering hours. People were the execution units, and they didn't scale easily.

That bottleneck is breaking. Since the tail end of 2025, and more concretely the start of 2026, agentic AI has matured to the point where Claude Code running on Opus 4.5, and recent versions of Codex running on GPT's latest models, can be considered genuine executors of work. Setting up agentic orchestration workflows is perhaps the highest-delta effort-per-time investment one can make right now, if they haven't already.

Once set up, the game shifts to context management and parallelism. Executors can own portions of workflows on their own. And while we aren't yet in a world where human validation isn't needed, we are certainly at the edge of one where human *micro-validation* isn't. How often are SWEs who've adopted AI tools early actually peering into the code their AI writes, compared to six months ago?

It is clear that we are confronted with a new reality of execution units being more available, in a flexible and easily scalable manner. This is no longer a reality of tomorrow. It is a reality of today.

Humans don't primarily need to be tasked with executing "tasks" anymore, but rather leading purposes.

---

And yet, at a policy and social level, the conversation has barely moved past compute, hardware, and energy. Task scaling was left at the side stage, perhaps because we did not anticipate needing to worry about it so soon. Now that we actually have the executors, this gap is hard to ignore. Clear paths on how to find new roots, new core ideas, new tasks, aren't obvious, and effort here remains minimal at the corporate level.

There are of course bastions within certain frontier labs who've been advocating for this. I was lucky to attend Tim Rocktäschel's talk at ICLR last year, where he argued for moving away from fixed-objective optimization entirely, towards open-ended systems: ones that generate an endless sequence of novel stepping stones rather than converge on a predefined goal. The automation of innovation itself. Other "AI-scientist" companies form similar theses as well, but they're all largely focused towards scientific acceleration, and not meeting today's corporate world where it is.

Back then, despite finding this fascinating, I did not anticipate the urgency of innovation needed here. The world looks very different now.

---

This urgency is two-fold.

If we are to continue pushing along the exponential, and if we believe it to be existentially important to do so, task scaling is essential. This is a mid-to-long-term issue.

Our current social order will also likely be challenged, and massively so, if we fail to task scale. Companies that can't scale their outputs proportionally to their reduced reliance on human execution are left with more people than they have work for. This is an immediate concern and calls for urgent action.

---

The path worth choosing is scaling tasks with people involved, not around them.

> "Every job has tasks and a purpose. AI automates tasks, but it can't replace your purpose. A software engineer's purpose isn't to write code; it's to solve problems. The more time AI saves on coding, the more time engineers have to find the problems worth solving." — Jensen Huang, 2026 *(slightly paraphrased)*

This is the crux of it. Task scaling alone, pointing more AI at more work, is not enough. The other side of the coin is scaling the breadth of human purpose in parallel. As AI absorbs execution, the surface area of what people choose to pursue needs to expand with it.

If it doesn't, what we're left with looks less like abundance and more like displacement.

Task scaling without purpose scaling is just unemployment. Purpose scaling without task scaling is idealism with no execution behind it. These two things have to rise together.

This is also likely to win in the short term, and it seems to be the path of least resistance towards abundance without requiring radical social reimagination. A world where more people are leading broader purposes, enabled by AI to execute more of what they imagine, is a more interesting world to be in.

Execution was always just the step between a good idea and seeing it matter. We now have more execution capacity than at any point in history. The question is whether we can generate enough good ideas, enough tasks, enough purposes, to match it.

Now it is time to solve for purpose.
