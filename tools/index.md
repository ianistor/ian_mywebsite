---
layout: default
title: Tools
permalink: /tools/
---
<section class="page-header">
  <p class="eyebrow">Tools</p>
  <h1>Tools and utilities</h1>
  <p class="lead">Each tool lives as a Markdown file in the <code>_tools</code> collection.</p>
</section>

<section class="card-grid">
  {% assign sorted_tools = site.tools | sort: 'title' %}
  {% for tool in sorted_tools %}
    <article class="card">
      <p class="eyebrow">Tool</p>
      <h2><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h2>
      <p>{{ tool.summary }}</p>
    </article>
  {% endfor %}
</section>
