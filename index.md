---
layout: default
title: Home
---
<section class="hero">
  <div class="hero-content">
    <p class="eyebrow">Technical Artist · Game Developer</p>
    <h1>Tools, workflows, and notes from production.</h1>
    <p class="lead">This site is built around two priorities: useful writing and practical tools. The resume and project history stay easy to find, but they do not dominate the homepage.</p>
    <div class="link-row">
      <a class="button" href="{{ '/blog/' | relative_url }}">Read blog</a>
      <a class="button secondary" href="{{ '/projects/' | relative_url }}">View projects</a>
      <a class="button secondary" href="{{ '/tools/' | relative_url }}">Browse tools</a>
      <a class="button secondary" href="{{ '/cv/' | relative_url }}">View Resume</a>
    </div>
  </div>
  <div class="hero-image-container">
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
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
        <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
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
  <div class="card-grid">
    {% for project in site.projects limit: 3 %}
      <article class="card">
        {% if project.image %}
          <img src="{{ project.image | relative_url }}" alt="" class="card-thumb">
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
        <p class="eyebrow">Project</p>
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <p>{{ project.summary }}</p>
      </article>
    {% endfor %}
  </div>
</section>
