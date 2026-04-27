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

<section class="card-grid projects-index-grid">
  {% assign sorted_projects = site.projects | sort: "release_year" | reverse %}
  {% for project in sorted_projects %}
    <article class="card js-clickable-card" data-href="{{ project.url | relative_url }}" role="link" tabindex="0" aria-label="Open {{ project.title }}">
      {% assign placeholder_label = project.placeholder_text | default: project.title | default: "Unannounced Project" %}
      {% if project.show_text_placeholder == true or project.image == blank %}
        <div class="project-card-thumb project-text-placeholder" aria-label="{{ placeholder_label }}">
          <span>{{ placeholder_label }}</span>
        </div>
      {% else %}
        <img src="{{ project.image | relative_url }}" alt="" class="project-card-thumb">
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
            {% unless normalized_label == "artstation" %}
              <a class="button secondary" href="{{ link.url }}">
                {% if link.logo_path %}
                  <img src="{{ link.logo_path | relative_url }}" alt="{{ link.logo_alt | default: link.label | append: ' logo' }}" class="button-logo">
                {% endif %}
                {{ link.label }}
              </a>
            {% endunless %}
          {% endfor %}
        </div>
      {% endif %}
    </article>
  {% endfor %}
</section>
