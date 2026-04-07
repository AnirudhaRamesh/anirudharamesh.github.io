---
title: "The Birth of a New Era of Distributed Collective Intelligence"
date: 2026-03-25
permalink: /blog/collective-distributed-autoresearch/
excerpt: "Flexible compute, redefined."
tags:
  - AI
  - Machine Learning
  - Distributed Learning
  - Autoresearch
---

Flexible compute usually means scaling up. More GPUs, bigger clusters, elastic cloud provisioning. The assumption is that more hardware = better results, and that the way to participate meaningfully is to have access to serious resources.

But there's another dimension to flexibility that gets overlooked — not just scaling the hardware, but scaling the *effort* across people and machines, regardless of what each one has.

People optimize things all the time. Models, configs, systems, processes. Mostly in isolation. The results are often open, reproducible, and scored on the same metric. All the ingredients for compounding are there — it's just that nobody closes the loop.

What if independent efforts weren't isolated, but fed into a collective + distributed candidate pool that everyone improves together? Each person's improvements become starting points for the next. Each piece of compute, however small, contributes meaningfully.

---

To put this to the test, I ran it on OpenAI's [Parameter Golf](https://openai.com/index/parameter-golf/) challenge — deliberately on a M4 MacBook Air (16GB), the most constrained Apple Silicon, as opposed to the intended 8xH100 setup. If the idea holds, the hardware shouldn't matter much.

Instead of optimizing alone, pull in other participants' submissions as candidates. Run a bandit over this collective pool — explore new candidates, exploit the best ones. Train each for 10 minutes, evaluate, keep improvements, revert regressions. Periodically scan for new submissions and add them to the pool. Share improved configs back.

Everyone's work compounds.

![System Diagram](/images/parameter-golf/collective_final_v2.png)

An AI researcher agent runs this loop autonomously. 84 experiments over ~14 hours, across 14 candidates — 6 ported directly from other participants' submissions. It was the best submission in its compute category at time of submission.

---

Three phases emerged naturally, without being designed for:

1. **Environment-specific fixes** (3.2 → 2.1 bpb). The baseline was configured for H100s. The warmdown schedule was decaying the learning rate from step 1 — fixing this single parameter was worth -0.98 bpb, the biggest win of the entire run. Reducing batch size to fit more training steps in the wallclock budget was the second.

2. **Hyperparameter tuning** (2.1 → 1.98 bpb). Learning rate, momentum, sequence length. Systematic but diminishing returns.

3. **Architecture changes** (1.98 → 1.93 bpb). SwiGLU activation and mirrored recurrence — weight sharing across layers — broke through the hyperparameter plateau.

![Optimization Journey](/images/parameter-golf/pr_optimization_journey.png)
*Scores from partial validation used during iteration for speed. Full eval: val_bpb=1.9263.*

---

The standout finding was cross-pollination.

SwiGLU was discovered on one candidate. Mirrored recurrence was found on another, ported from [PR #84](https://github.com/openai/parameter-golf/pull/84). Neither was the best on its own. Combining them on a third candidate beat both.

![Technique Matrix](/images/parameter-golf/technique_matrix.png)

The winning candidate was the only one combining *all* the winning techniques. It found those techniques by having access to a diverse pool where good ideas could be identified and recombined. You don't need a single brilliant run. You need a diverse pool where improvements from different sources compose.

This is the core of it. Not the competition, not the specific techniques — but the fact that heterogeneous effort compounds when you close the loop.

---

One person, one MacBook, overnight. But there's nothing about it that requires this.

If multiple people ran their own loops — each pulling from and contributing back to a shared candidate pool — improvements would compound across participants. You don't even need the same hardware. Someone on a laptop explores one part of the space, someone on a cluster explores another, and the system routes effort to wherever it's most productive.

That's what flexible compute should actually mean. Not elastic provisioning of more of the same, but a system where different people, different hardware, and different ideas compound into something none of them would reach alone. The infrastructure for this mostly exists already. The missing piece is just the loop.

---

Working on some immediate improvements to this, useful here and importantly beyond:

1. Evolving meta-strategy — hyperagents-style, where the search strategy itself adapts.
2. Actively partitioning agent effort to suit strengths and reduce token use. Hyperparameter optimization, for instance, need not be agent-driven when other HPO methods are stronger and more efficient in this search.
3. Expanding and testing the collective candidate pool with other players and collaborators, who can have their own self-improvement setups.

Full submission with all configs: [PR #597](https://github.com/openai/parameter-golf/pull/597)

---

### Appendix: What worked and what didn't

**Worked:** smaller batches = more steps (the single most important insight for constrained hardware), mirrored recurrence (4 unique blocks reused across 8 layers — halves parameters, maintains effective depth), SwiGLU over relu² (consistent improvement across every candidate), and the bandit itself (correctly concentrated 41 of 84 experiments on the eventual winner).

**Didn't work:** deeper models (too slow per step), very small batches (gradient noise outweighs step count benefit), BigramHash and ValueResidual (added complexity without clear gain on constrained hardware).
