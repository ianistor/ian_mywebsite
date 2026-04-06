---
layout: default
title: Tools
permalink: /tools/
---
<section class="page-header">
  <p class="eyebrow">Tools</p>
  <h1>Tools and utilities</h1>
  <p class="lead">Production-focused tools, plugins, and utilities.</p>
</section>

<section class="card-grid">
  {% assign sorted_tools = site.tools | sort: 'title' %}
  {% for tool in sorted_tools %}
    <article class="card">
      {% if tool.image %}
        <img src="{{ tool.image | relative_url }}" alt="" class="card-thumb">
      {% else %}
        <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
      {% endif %}
      <p class="eyebrow">Tool</p>
      <h2><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h2>
      <p>{{ tool.summary }}</p>
    </article>
  {% endfor %}
</section>
