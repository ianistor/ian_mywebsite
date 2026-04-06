---
layout: default
title: Home
---
<section class="hero">
  <div class="hero-content">
    <p class="eyebrow">Technical Artist · Game Developer</p>
    <h1>Tools, workflows, and notes from production.</h1>
    <p class="lead">This site is built around two priorities: useful writing and practical tools. The resume and project history stay easy to find, but they do not dominate the homepage.</p>

    <div class="hero-project-links">
      <p class="eyebrow">Production projects</p>
      <div class="post-tags">
        {% assign featured_projects = site.projects | sort: 'title' %}
        {% for project in featured_projects %}
          <a class="tag-chip" href="{{ project.url | relative_url }}">{{ project.title }}</a>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="hero-image-container">
    <img src="{{ '/assets/images/profile_photo.png' | relative_url }}" alt="" class="hero-image">
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <h2>Tools</h2>
    <a href="{{ '/tools/' | relative_url }}">See all</a>
  </div>
  <div class="card-grid">
    {% for tool in site.tools limit: 6 %}
      <article class="card">
        {% if tool.image %}
          <img src="{{ tool.image | relative_url }}" alt="" class="card-thumb">
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
        <p class="eyebrow">Tool</p>
        <h3><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h3>
        <p>{{ tool.summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <h2>Blog</h2>
    <a href="{{ '/blog/' | relative_url }}">See all</a>
  </div>
  <div class="card-grid">
    {% for post in site.posts limit: 6 %}
      <article class="card">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="" class="card-thumb">
        {% elsif post.youtube_id %}
          <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg" alt="" class="card-thumb">
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
        <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        {% if post.tags %}
          <div class="post-tags">
            {% for tag in post.tags %}
              <a class="tag-chip small" href="{{ '/tags/' | append: tag | append: '/' | relative_url }}">{{ tag }}</a>
            {% endfor %}
          </div>
        {% endif %}
        <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block">
  <div class="section-head">
    <h2>Projects</h2>
    <a href="{{ '/projects/' | relative_url }}">See all</a>
  </div>
  <div class="projects-showcase">
    {% assign sorted_projects = site.projects | sort: 'title' %}
    {% for project in sorted_projects %}
      {% if forloop.first %}
        <article class="project-feature-card">
          {% if project.image %}
            <img src="{{ project.image | relative_url }}" alt="" class="project-feature-image">
          {% else %}
            <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="project-feature-image">
          {% endif %}
          <div class="project-feature-copy">
            <p class="eyebrow">Featured project</p>
            <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
            {% if project.role %}<p class="meta">{{ project.role }}</p>{% endif %}
            <p>{{ project.summary }}</p>
          </div>
        </article>
      {% endif %}
    {% endfor %}

    <div class="project-side-stack">
      {% for project in sorted_projects offset:1 limit:2 %}
        <article class="card project-mini-card">
          {% if project.image %}
            <img src="{{ project.image | relative_url }}" alt="" class="card-thumb">
          {% else %}
            <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
          {% endif %}
          <p class="eyebrow">Project</p>
          <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
          {% if project.role %}<p class="meta">{{ project.role }}</p>{% endif %}
          <p>{{ project.summary }}</p>
        </article>
      {% endfor %}
    </div>
  </div>
</section>
