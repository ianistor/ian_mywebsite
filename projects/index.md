---
layout: default
title: Projects
permalink: /projects/
---

<section class="page-header">
  <p class="eyebrow">Projects</p>
  <h1>AAA Projects</h1>
  <p class="lead">Projects I had the opportunity to ship along my career.</p>
</section>

<section class="card-grid">
  {% assign sorted_projects = site.projects | sort: "release_year" | reverse %}
  {% for project in sorted_projects %}
    <article class="card">
      {% if project.image %}
        <img src="{{ project.image | relative_url }}" alt="" class="project-card-thumb">
      {% else %}
        <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="project-card-thumb">
      {% endif %}

      <h2 class="project-card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>

      {% if project.company or project.role %}
        <p class="meta project-card-meta">
          {% if project.company %}{{ project.company }}{% endif %}
          {% if project.company and project.role %} · {% endif %}
          {% if project.role %}{{ project.role }}{% endif %}
        </p>
      {% endif %}

      <p class="project-card-summary">{{ project.summary }}</p>

      {% if project.links %}
        <div class="link-row project-card-links">
          {% for link in project.links %}
            {% assign normalized_label = link.label | downcase %}
            <a class="button secondary{% if normalized_label == "artstation" %} project-link-artstation{% endif %}" href="{{ link.url }}">
              {% if normalized_label == "artstation" %}<img src="{{ '/assets/images/logos/artstation-logo.svg' | relative_url }}" alt="ArtStation logo" class="project-link-artstation-logo">{% endif %}{{ link.label }}
            </a>
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% endfor %}
</section>
