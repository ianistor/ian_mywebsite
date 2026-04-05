---
layout: default
title: Home
---
<section class="hero">
  <p class="eyebrow">Technical Artist · Game Developer</p>
  <h1>Tools, workflows, and notes from production.</h1>
  <p class="lead">This site is built around two priorities: useful writing and practical tools. The CV and project history stay easy to find, but they do not dominate the homepage.</p>
  <div class="link-row">
    <a class="button" href="{{ '/blog/' | relative_url }}">Read blog</a>
    <a class="button secondary" href="{{ '/tools/' | relative_url }}">Browse tools</a>
    <a class="button secondary" href="{{ '/cv/' | relative_url }}">View CV</a>
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <h2>Featured tools</h2>
    <a href="{{ '/tools/' | relative_url }}">See all</a>
  </div>
  <div class="card-grid">
    {% assign featured_tools = site.tools | where: 'featured', true %}
    {% for tool in featured_tools limit: 3 %}
      <article class="card">
        <p class="eyebrow">Tool</p>
        <h3><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h3>
        <p>{{ tool.summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <h2>Latest posts</h2>
    <a href="{{ '/blog/' | relative_url }}">See all</a>
  </div>
  <div class="list-stack">
    {% for post in site.posts limit: 4 %}
      <article class="list-card">
        <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 170 }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block quick-resume">
  <div class="section-head">
    <h2>Quick resume</h2>
    <a href="{{ '/cv/' | relative_url }}">Open full CV</a>
  </div>
  <div class="card-grid two-up">
    <article class="card">
      <p class="eyebrow">Focus</p>
      <p>Technical art, Houdini workflows, Unreal Engine tools, gameplay-integrated VFX, pipelines, and production problem solving.</p>
    </article>
    <article class="card">
      <p class="eyebrow">Snapshot</p>
      <p>Senior Technical Artist with shipped AAA experience, tool-building focus, and a strong bias toward systems that save teams time.</p>
    </article>
  </div>
</section>
