---
layout: default
title: Blog
permalink: /blog/
---
<section class="page-header">
  <p class="eyebrow">Blog</p>
  <h1>Posts</h1>
  <p class="lead">Browse all posts below or filter by tag.</p>
</section>

<section class="section-block">
  <div class="section-head">
    <h2>Tags</h2>
  </div>
  <div class="tag-cloud">
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      {% assign tag_name = tag[0] %}
      <a class="tag-chip" href="{{ '/tags/' | append: tag_name | downcase | append: '/' | relative_url }}">
        {{ tag_name | upcase }} <span>{{ tag[1].size }}</span>
      </a>
    {% endfor %}
  </div>
</section>

<section class="card-grid">
  {% for post in site.posts %}
    <article class="card">
      <div class="card-media">
        {% if post.image %}
          <img src="{{ post.image | relative_url }}" alt="" class="card-thumb">
        {% elsif post.youtube_id %}
          <img src="https://img.youtube.com/vi/{{ post.youtube_id }}/hqdefault.jpg" alt="" class="card-thumb">
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
        <div class="card-overlay">
          <p>{{ post.overlay_text | default: post.excerpt | strip_html | truncate: 140 }}</p>
        </div>
      </div>
      <p class="meta">{{ post.date | date: "%B %-d, %Y" }}</p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      {% if post.tags %}
        <div class="post-tags">
          {% for tag in post.tags %}
            <a class="tag-chip small" href="{{ '/tags/' | append: tag | downcase | append: '/' | relative_url }}">{{ tag | upcase }}</a>
          {% endfor %}
        </div>
      {% endif %}
      <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
    </article>
  {% endfor %}
</section>
