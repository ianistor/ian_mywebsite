---
layout: post
title: "Template with tags, helpers, and formatting"
date: 2026-04-06
tags: [houdini, vex, python, snippet, workflow]
image: "https://cdnb.artstation.com/p/media_assets/images/images/001/250/727/original/karma_building_up-ezgif.com-resize.gif?1707944233"
hidden: true
---

<div class="callout tldr">
<p><strong>TLDR</strong></p>
<ul>
  <li>Use this as a starter template for <strong>blog posts</strong> and <strong>tools</strong>.</li>
  <li>It includes frontmatter examples, tags, callouts, code blocks, heading anchors, thumbnails, and navigation.</li>
  <li>For code language selection, use fenced blocks with <code>python</code> or <code>vex</code> (or <code>c</code> for VEX-compatible highlighting).</li>
</ul>
</div>

## Blog post frontmatter template

```yml
---
layout: post
title: "Your post title"
date: 2026-04-06
tags: [houdini, vex, python, snippet, workflow]
image: "https://example.com/thumbnail.jpg" # optional but recommended
youtube_id: "dQw4w9WgXcQ" # optional fallback if no image
---
```

## Tool frontmatter template

```yml
---
layout: tool
title: "Your tool name"
summary: "One-line tool summary"
tags: [tool, houdini, workflow] # optional but now supported in tool pages
image: "https://example.com/tool-thumb.jpg"
links:
  - label: "GitHub"
    url: "https://github.com/..."
  - label: "Download"
    url: "https://..."
---
```

## Tags you can use right now

Current built-in tag pages in this site:

- `houdini`
- `vex`
- `python`
- `snippet`
- `workflow`
- `vfx`

You can add new tags anytime in frontmatter; create a corresponding `tags/<tag>.md` page if you want a dedicated tag archive page.

## Helpers and formatting available

### Callouts

```html
<div class="callout note">...</div>
<div class="callout tip">...</div>
<div class="callout warning">...</div>
<div class="callout tldr">...</div>
```

<div class="callout note"><p><strong>Note:</strong> Good for context and assumptions.</p></div>
<div class="callout tip"><p><strong>Tip:</strong> Good for shortcuts and production advice.</p></div>
<div class="callout warning"><p><strong>Warning:</strong> Good for edge cases and gotchas.</p></div>

### Headings with auto-anchor links

Use normal Markdown headings (`##`, `###`, `####`). The site auto-adds `#` anchor links to those headings.

### Code blocks with copy button + language label

#### Python example

```python
import math

def remap(value, in_min, in_max, out_min, out_max):
    t = (value - in_min) / (in_max - in_min)
    return out_min + t * (out_max - out_min)

print(remap(0.5, 0.0, 1.0, 0.0, 255.0))
```


#### VEX example

```c
// Use this if your renderer/highlighter treats VEX as C-like syntax.
vector uvw = relbbox(0, @P);
@Cd = set(uvw.x, uvw.y, uvw.z);
```

## Media helpers

- Post card thumbnail priority:
  1. `image`
  2. `youtube_id` thumbnail
  3. default placeholder
- Inline images are zoomable via lightbox when clicked.
- Before/after image comparisons are available with an include-based slider.

### Before/after comparison slider

Use this snippet:

```liquid
{% raw %}{% include image-compare.html
  before='/assets/images/projectcovers/TCTD2.jpg'
  before_alt='The Division 2 cover'
  after='/assets/images/projectcovers/TCTD2WONY.jpg'
  after_alt='The Division 2: Warlords of New York cover'
  position=50
  label='Slide to compare the two covers'
%}{% endraw %}
```

Example output:

{% include image-compare.html
  before='/assets/images/projectcovers/TCTD2.jpg'
  before_alt='The Division 2 cover'
  after='/assets/images/projectcovers/TCTD2WONY.jpg'
  after_alt='The Division 2: Warlords of New York cover'
  position=50
  label='Slide to compare the two covers'
%}

![Example image](https://cdnb.artstation.com/p/media_assets/images/images/001/250/727/original/karma_building_up-ezgif.com-resize.gif?1707944233)

## Suggested structure for snippet posts

1. Problem
2. Snippet
3. What it does
4. Edge cases
5. When to use it
6. Related tags
