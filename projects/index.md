---
layout: default
title: Projects
permalink: /projects/
---
<section class="page-header">
  <p class="eyebrow">Projects</p>
  <h1>Selected projects</h1>
  <p class="lead">A focused selection of shipped or production work, each with its own dedicated page.</p>
</section>

<section class="card-grid">
  {% assign sorted_projects = site.projects | sort: "release_year" | reverse %}
  {% for project in sorted_projects %}
    <article class="card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="" class="card-thumb">
      {% else %}
        <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
      {% endif %}
      <h2><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
      {% if project.role %}<p class="meta">{{ project.role }}</p>{% endif %}
      <p>{{ project.summary }}</p>
    </article>
  {% endfor %}
</section>
