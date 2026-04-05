---
layout: default
title: Blog
permalink: /blog/
---
<section class="page-header">
  <p class="eyebrow">Blog</p>
  <h1>Posts</h1>
  <p class="lead">Write new posts as Markdown files inside <code>_posts</code>. Jekyll will automatically place them here.</p>
</section>

<section class="card-grid">
  {% for post in site.posts %}
    <article class="card">
      {% if post.image %}
        <img src="{{ post.image | relative_url }}" alt="" class="card-thumb">
      {% else %}
        <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
      {% endif %}
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
    </article>
  {% endfor %}
</section>