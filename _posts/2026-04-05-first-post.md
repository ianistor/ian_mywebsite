---
layout: post
title: "Break it down - God of War Mystic Gateway"
date: 2024-02-14
tags: [houdini, workflow, vfx]
image: "https://cdnb.artstation.com/p/media_assets/images/images/001/250/727/original/karma_building_up-ezgif.com-resize.gif?1707944233"
---

<div class="callout tldr">
<p><strong>TLDR</strong></p>
<ul>
  <li>This post demonstrates the blog structure, tags, image thumbnail, helpers, and code blocks.</li>
  <li>Tags are stored lowercase in front matter and displayed uppercase in the UI.</li>
</ul>
</div>

<img src="https://cdnb.artstation.com/p/media_assets/images/images/001/250/727/original/karma_building_up-ezgif.com-resize.gif?1707944233" width="714" height="400" />

I was playing God of War Ragnarök during Christmas break, and I really liked how the mystic gateway animation felt.

## First step, references

References and observations drive the breakdown.

## Basic VEX example

```c
f@mask = fit(@P.y, 0.0, 1.0, 0.0, 1.0);
@Cd = set(f@mask, f@mask, f@mask);
```

<div class="callout note">
<p><strong>Note</strong></p>
<p>This is a prototype-style breakdown, not a final production implementation.</p>
</div>

## Closing

This was a fun thing to tackle and a useful way to test out the blog format.
