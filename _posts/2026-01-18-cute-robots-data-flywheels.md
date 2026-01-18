---
title: "Let there be cute robots! The sillier path for the creation of data flywheels in robotics"
date: 2026-01-18
permalink: /blog/cute-robots-data-flywheels/
excerpt: "What if instead of billion-dollar autonomous driving approaches, we could kickstart robotics data collection with cheap, cute collectible robots that consumers actually want to interact with?"
tags:
  - Robotics
  - Machine Learning
  - Data Collection
  - Consumer Robotics
  - AI
---

> *Data is the fossil fuel of AI.*
> ~ Ilya Sutskever, 2024

We know how the story goes for LLMs for text, VLMs and Large Vision Models with images and videos. Audio is and has been generated en-mass via call centers, conferences, and as an accompaniment of videos.

By and large, across these domains, there's both a large quantity and a large variation in domains, and form factors, enabling *general purpose* learning.

Robotics is different.

### The strange case of robotics

Robotics needs a combination of,

1. **World "Understanding"** involving
    - physics
    - object-world and object-object relations
2. **Perception** within the context of understood world
3. **Ability to plan and interact** with *its world* subject to *its own form factor* (i.e. "affordances")
4. **Task Understanding / Instructional Directive**

**The promise of autonomous driving.** With Waymos now taking around a third of trips in San Francisco, looking through the lens of autonomous driving may give us idea on how to build these pipelines for general purpose robotics.

However, even upon a high-level inspection, it is clear that going down the autonomous vehicle path would require big big $$$

AV companies spend billions in developing and over a decade of commercial effort (collecting millions of hours of first-person driving videos along the way) to develop the first commercially viable iterations of their product.

This is in-spite the fact that this problem is tightly constrained as compared to general purpose robotics. Here,

1. **World understanding**: road videos encode expected behavior, constraints, and predictable actions
2. **Perception**: video is specifically suited to roads, often even to specific cities via progressive rollouts
3. **Form factor**: fixed. It is always a car, operating in a known environment
4. **Tasks and instructional directives**: fixed and well-defined

To *solve* autonomous driving, we constrain both the form-factor, and the world it'll operate in.

General purpose robotics however necessitates loosening these constraints. To this end, we now need data that will help with general world understanding, as well as the ability to plan and interact with a general form factor.

i.e.,

> f_av(S) = a

> ⇒ f_general(S, self) = a

Fortunately, for the large part we already have the data needed for world understanding through the internet.

What we lack is data to learn the ability to plan and interact within a robot's own form factor, and to adapt to new instructional directives.

If we go down the AV path, we'd collect millions of hours of data, across a range of form factors, across numerous environments and different people / methodologies of instructional directive (which is very difficult to direct centrally).

This requires massive capital investment, and akin to the promise of autonomous driving, lays the path towards general purpose robotics on a long, familiar, and expensive trajectory.

This capital burden likely needs to be taken up by the companies trying to create these robots, and not the general consumer, as if a consumer is sold a serious robot for some task, the consumer would want it to work well. On the flip side,

*It's okay for a robot to not be very useful, as long as it does not cost a lot!*

---

## The road less traveled. What if we could do this some other way?

I take inspiration from some consumer trends from the past few years,

1. **Explosion of labubus and collectible figurines.**

    There is great appetite in the consumer market for 'cute' collectibles — with people willing to pay $100s for securing the right collectible (which costs $ to make), which by itself does nothing but look cute. The collectibles differ in a range of ways from just primarily color (labubus) to differing poses (smiskis) to completely different form factors.

2. **Pokemon Go.**

    Consumers enjoy community gaming and competition, even when interlaced with the physical world. 'Training' is gamified.

Bringing these together, I believe we could spark this data flywheel with significantly lesser investment from creators (costs shared with consumers right from the start) with cheap, small, cute robots styled as collectibles that have some capacity to learn / interact from human instructional directive through gamified 'training'.

This also pushes away from the burden of robots needing to immediately be useful, with the primary purpose here just being cute and adequately responsive to human interaction.

Gamified training can allow both free form instructional directive (through vision, audio, text, some specific software) in general environments humans operate in, as well as specific tasks / subtasks (jacket on-off / sweeping from karate kid) designed to generate learning specific skills.

---

### A reasonable skepticism

Choosing to walk down this road comes with challenges. It is nontrivial to create robots that are sufficiently cheap, meaningfully diverse in form factor at scale, while still being capable of learning or responding well enough to make the interaction engaging. Human-provided feedback, even when gamified, is noisy and inconsistent. Physical interaction also does not scale as easily as digital signals.

There is also the question of transfer. What, if anything, carries over from small, toy-like robots to more capable systems is not guaranteed.

This raises a deeper question of whether physical instantiation needs to be the primary source of data at all. Perhaps most learning can happen in virtual or simulated settings, with occasional physical embodiments serving to calibrate the sim-to-real gap rather than define the data distribution.

The bet here is not that this path avoids these challenges, but that it offers a cheaper, more iterable way to explore them than the capital-intensive routes robotics has historically relied on.

---

Regardless, the path less traveled is appealing because we can still run this experiment many a times over and still not have to invest even a fraction of what we had to within AV.

Besides, wouldn't it be a wonderful to live in a world with cute, silly robots?
