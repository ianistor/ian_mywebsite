---
layout: default
title: Home
---

<section class="hero hero-with-animation">
  <div class="hero-animation-shell" aria-hidden="true">
    <canvas id="hero-geometry-canvas" class="hero-geometry-canvas"></canvas>
  </div>

  <div class="hero-content hero-content-elevated">
    <p class="eyebrow hero-eyebrow">Technical Artist · Game Developer · Procedural Artist</p>
    <h1 class="hero-title">Tools, workflows, and random experiments.</h1>
    <p class="lead hero-lead">Senior Technical Artist with 14+ years of AAA experience, with a passion for workflows, procedural content and real-time visuals. Proven track record developing tools, destruction systems, and gameplay integrated visual solutions while mentoring teams, establishing best practices, and driving clear documentation to scale production across disciplines.</p>

    <div class="animation-picker-wrap">
      <label for="hero-animation-select" class="animation-picker-label">Background animation</label>
      <select id="hero-animation-select" class="theme-select animation-picker-select" aria-label="Choose a geometric background animation">
        <option value="constellation">Constellation (cvless-style)</option>
        <option value="orbit">Orbit Rings</option>
        <option value="triangles">Triangle Drift</option>
        <option value="off">Off</option>
      </select>
    </div>
  </div>

  <div class="hero-image-container hero-content-elevated">
    <img src="{{ '/assets/images/profile_photo.png' | relative_url }}" alt="" class="hero-image">
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
              <a class="tag-chip small" href="{{ '/tags/' | append: tag | downcase | append: '/' | relative_url }}">{{ tag | upcase }}</a>
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
    <h2>Projects</h2>
    <a href="{{ '/projects/' | relative_url }}">See all</a>
  </div>

  <div class="projects-row-wrap">
    <div class="projects-row-hint">Scroll for more</div>

    <div class="projects-row">
      {% assign sorted_projects = site.projects | sort: "release_year" | reverse %}
      {% for project in sorted_projects %}
        <article class="project-row-card">
          {% assign placeholder_label = project.placeholder_text | default: project.title | default: "Unannounced Project" %}
          {% if project.show_text_placeholder == true or project.image == blank %}
            <div class="project-row-image project-text-placeholder" aria-label="{{ placeholder_label }}">
              <span>{{ placeholder_label }}</span>
            </div>
          {% else %}
            <img src="{{ project.image | relative_url }}" alt="" class="project-row-image">
          {% endif %}
          <div class="project-row-copy">
            <h3 class="project-card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>

            {% if project.company or project.role %}
              <p class="meta project-card-meta">
                {% if project.company %}{{ project.company }}{% endif %}
                {% if project.company and project.role %} · {% endif %}
                {% if project.role %}{{ project.role }}{% endif %}
              </p>
            {% endif %}

            <p class="project-card-summary">{{ project.summary }}</p>
          </div>
        </article>
      {% endfor %}
    </div>

    <div class="projects-row-dots" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
  </div>
</section>
