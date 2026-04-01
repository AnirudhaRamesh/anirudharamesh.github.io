---
title: "The Birth of a New Era of Distributed Collective Intelligence"
date: 2026-03-25
permalink: /blog/collective-distributed-autoresearch/
excerpt: "What if competition submissions weren't isolated attempts, but a collective candidate pool that everyone improves together?"
tags:
  - AI
  - Machine Learning
  - Distributed Learning
  - Autoresearch
---

I threw in a submission to OpenAI's [Parameter Golf](https://openai.com/index/parameter-golf/) challenge last week — under tighter compute constraints than the intended 8xH100 setup, running on a M4 MacBook Air with 16GB. It was the best submission in its compute category at time of submission.

More than the attempt itself though, I was excited by the idea behind it.

---

### The idea

What if competition submissions weren't isolated attempts, but a collective + distributed candidate pool that everyone improves together?

Competitions like Parameter Golf have a natural structure to them. People submit PRs with their architectures and configs. These are open, reproducible, and scored on the same metric. Most participants optimize in isolation — they take the baseline, try things, and submit. The work of one participant doesn't directly feed into the work of another.

But it could.

Instead of optimizing alone, what if you pull in other participants' submissions as candidates into your own autoresearch loop? Run a bandit over this collective pool, train each for 10 minutes, keep improvements, share improved configs back. Everyone's work compounds.

![System Diagram](/images/parameter-golf/collective_final_v2.png)

This is what I set up. An AI researcher agent runs the loop autonomously overnight. Every 30 minutes it scans for new Mac-relevant PR submissions and adds them to the candidate pool. A softmax bandit balances exploration (trying new candidates) against exploitation (improving the best ones). Improvements get committed and shared back as a PR.

---

### What happened

84 experiments. 14 candidates — 6 ported from other participants' PRs, the rest evolved from baseline configs. Starting from a val_bpb of 3.226, the system converged to 1.926 over ~14 hours.

![Optimization Journey](/images/parameter-golf/pr_optimization_journey.png)
*Scores from partial validation used during iteration for speed. Full eval: val_bpb=1.9263.*

Three distinct phases emerged naturally, without being designed:

1. **Mac-specific fixes** (3.2 → 2.1). The baseline was configured for H100s. Fixing the warmdown schedule — which was decaying the learning rate from step 1 — was a single parameter change worth -0.98 bpb. The biggest win of the entire run. Reducing batch size to fit more training steps in the 10-minute wallclock was the second.

2. **Hyperparameter tuning** (2.1 → 1.98). Learning rate, momentum, sequence length, warmdown schedule. Systematic but diminishing returns.

3. **Architecture changes** (1.98 → 1.93). SwiGLU activation and mirrored recurrence (weight sharing across layers) broke through the hyperparameter plateau. Gradient clipping made SwiGLU training stable.

---

### Cross-pollination

The standout finding was that cross-pollination between candidates works. Improvements from different sources compose.

SwiGLU was discovered on candidate 08 (a custom config). Mirrored recurrence was found on candidate 10 (ported from [PR #84](https://github.com/openai/parameter-golf/pull/84)). Neither was the best on its own. But combining them on candidate 02 beat both.

![Technique Matrix](/images/parameter-golf/technique_matrix.png)

The winning candidate was the only one that combined *all* the winning techniques. And it found those techniques by having access to a pool of diverse candidates, each exploring different parts of the search space.

This is the collective learning thesis working in miniature. You don't need a single brilliant run. You need a diverse pool where good ideas can be identified and recombined.

---

### What this means more broadly

This line of pooled effort gives new meaning to flexible distributed compute.

The setup I ran was one person, one MacBook, overnight. But there's nothing about it that requires this. If multiple participants ran their own autoresearch loops, each pulling from and contributing back to a shared candidate pool, improvements would compound across participants. You don't even need the same hardware — someone on a Mac Mini explores one part of the space, someone on an A100 explores another, and the bandit routes effort to wherever it's most productive.

The competition PR structure already provides most of what's needed. Submissions are open, reproducible, and scored on the same metric. The missing piece is just the loop — pulling them in, improving, sharing back.

---

### Some things that worked, some that didn't

**Worked:**
- Smaller batches = more steps. The single most important Mac insight. 8K token batches fit ~800 steps vs ~50 with the H100 default.
- Mirrored recurrence. 4 unique blocks reused across 8 logical layers. Halves parameters, maintains effective depth.
- SwiGLU over relu². Consistent improvement across every candidate.
- The bandit itself. With temperature 0.05, it correctly concentrated 41 of 84 experiments on the eventual winner.

**Didn't work:**
- Deeper models (>10 layers). Too slow per step on Mac, can't fit enough training.
- Very small batches (4096). Gradient noise outweighs the step count benefit.
- BigramHash and ValueResidual. Added complexity without clear gain on constrained hardware.

---

### What's next

Working on some immediate improvements to this setup, which should be useful in competitions and importantly beyond:

1. Evolving meta-strategy — hyperagents-style, where the search strategy itself adapts.
2. Actively partitioning agent effort to suit strengths and reduce token use. Hyperparameter optimization, for instance, need not be agent-driven when other HPO methods are stronger and more efficient in this search.
3. Expanding and testing the collective candidate pool with other players and collaborators, who can have their own self-improvement setups.

Full submission with all configs: [PR #597](https://github.com/openai/parameter-golf/pull/597)
