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
      <div class="card-media">
        {% assign placeholder_label = tool.placeholder_text | default: tool.title | default: "Unannounced Project" %}
        {% if tool.show_text_placeholder == true or tool.image == blank %}
          <div class="card-thumb project-text-placeholder" aria-label="{{ placeholder_label }}">
            <span>{{ placeholder_label }}</span>
          </div>
        {% elsif tool.image %}
          <img src="{{ tool.image | relative_url }}" alt="" class="card-thumb">
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
        <div class="card-overlay">
          <p>{{ tool.overlay_text | default: tool.summary }}</p>
        </div>
      </div>
      <p class="eyebrow">Tool</p>
      <h2><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h2>
      <p>{{ tool.summary }}</p>
    </article>
  {% endfor %}
</section>
