---
layout: default
title: Home
---
<div class="hero">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
</div>

<section id="tools">
  <h2 class="section-title">Featured Tools</h2>
  <div class="card-grid">
    {% assign featured_tools = site.tools | where: 'featured', true | slice: 0, 4 %}
    {% for tool in featured_tools %}
    <div class="card">
      <h3><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h3>
      <p>{{ tool.summary }}</p>
    </div>
    {% endfor %}
    {% if featured_tools == empty %}
    <p>No featured tools yet.</p>
    {% endif %}
  </div>
</section>

<section id="blog">
  <h2 class="section-title">Latest Posts</h2>
  <div class="card-grid">
    {% assign posts = site.posts | slice: 0, 4 %}
    {% for post in posts %}
    <div class="card">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="meta">{{ post.date | date: "%B %d, %Y" }}{% if post.tags %} | {{ post.tags | join: ', ' }}{% endif %}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
    </div>
    {% endfor %}
    {% if posts == empty %}
    <p>No posts yet.</p>
    {% endif %}
  </div>
</section>
