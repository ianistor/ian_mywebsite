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
  {% assign tools_with_position = site.tools | where_exp: 'tool', 'tool.landing_position != nil' %}
  {% assign tools_without_position = site.tools | where_exp: 'tool', 'tool.landing_position == nil' | sort: 'title' %}

  {% assign max_landing_position = tools_with_position | map: 'landing_position' | sort | last | plus: 0 %}

  {% for position in (0..max_landing_position) %}
    {% for tool in tools_with_position %}
      {% assign tool_position = tool.landing_position | plus: 0 %}
      {% if tool_position == position %}
      <article class="card js-clickable-card" data-href="{{ tool.url | relative_url }}" role="link" tabindex="0" aria-label="Open {{ tool.title }}">
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
        <h2><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h2>
        <p>{{ tool.summary }}</p>
      </article>
      {% endif %}
    {% endfor %}
  {% endfor %}

  {% for tool in tools_without_position %}
    <article class="card js-clickable-card" data-href="{{ tool.url | relative_url }}" role="link" tabindex="0" aria-label="Open {{ tool.title }}">
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
      <h2><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h2>
      <p>{{ tool.summary }}</p>
    </article>
  {% endfor %}
</section>
