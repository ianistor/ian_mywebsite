---
layout: default
title: Blog
---
<h1>Blog</h1>
{% for post in site.posts %}
  <div class="card">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="meta">{{ post.date | date: "%B %d, %Y" }}{% if post.tags %} | {{ post.tags | join: ', ' }}{% endif %}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}
