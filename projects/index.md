---
layout: default
title: Projects
permalink: /projects/
---
<section class="page-header">
  <p class="eyebrow">Projects</p>
  <h1>Projects</h1>
</section>

<section class="card-grid">
  {% for project in site.projects %}
    <article class="card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="" class="card-thumb">
      {% else %}
        <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
      {% endif %}
      <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
      <p>{{ project.summary }}</p>
    </article>
  {% endfor %}
</section>