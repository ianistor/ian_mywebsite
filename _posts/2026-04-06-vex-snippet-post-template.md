---
layout: post
title: "VEX snippet post template with tags and helpers"
date: 2026-04-06
tags: [houdini, vex, snippet, workflow]
image: "https://cdnb.artstation.com/p/media_assets/images/images/001/250/727/original/karma_building_up-ezgif.com-resize.gif?1707944233"
---

<div class="callout tldr">
<p><strong>TLDR</strong></p>
<ul>
  <li>This post demonstrates tags, thumbnails, code blocks, callouts, anchors, and previous/next navigation.</li>
  <li>Because it includes <code>tags: [houdini, vex, snippet, workflow]</code>, it will appear in those tag pages.</li>
  <li>The <code>image</code> field is used as the card thumbnail on the blog grid.</li>
</ul>
</div>

## Problem

Sometimes I just want a place to keep small VEX snippets without writing a full long-form breakdown.

<div class="callout note">
<p><strong>Note</strong></p>
<p>This is a sample post meant to prove the blog structure, not to teach a complete workflow.</p>
</div>

## Basic VEX example

Here is a tiny VEX snippet:

```c
f@mask = fit(@P.y, 0.0, 1.0, 0.0, 1.0);
@Cd = set(f@mask, f@mask, f@mask);
```

## Why tags matter

With these tags:

- `houdini`
- `vex`
- `snippet`
- `workflow`

You can browse the blog by topic instead of relying on date order only.

<div class="callout tip">
<p><strong>Tip</strong></p>
<p>For your short technical notes, use a combination like <code>[houdini, vex, snippet]</code>. For longer articles, add something like <code>workflow</code> or <code>breakdown</code>.</p>
</div>

## Optional YouTube fallback

If you do not set an `image`, you can use this instead:

```yml
youtube_id: "dQw4w9WgXcQ"
```

Then the post card will use the YouTube thumbnail automatically.

<div class="callout warning">
<p><strong>Warning</strong></p>
<p>Local uploaded videos still cannot auto-generate a frame thumbnail on GitHub Pages alone. Use <code>image</code> for those.</p>
</div>

## Inline image example

![Example image](https://cdnb.artstation.com/p/media_assets/images/images/001/250/727/original/karma_building_up-ezgif.com-resize.gif?1707944233)

## Suggested structure for future snippet posts

- Short problem statement
- Snippet
- What it does
- Edge cases
- When to use it
