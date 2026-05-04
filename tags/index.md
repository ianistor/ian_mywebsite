---
layout: default
title: Tags
permalink: /tags/
---
<section class="page-header">
  <p class="eyebrow">Tags</p>
  <h1>Browse by tag</h1>
</section>

<section class="tag-cloud">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    {% assign tag_name = tag[0] %}
    {% assign visible_posts = tag[1] | where_exp: "post", "post.hidden != true" %}
    {% if visible_posts.size > 0 %}
    <a class="tag-chip" href="{{ '/tags/' | append: tag_name | downcase | append: '/' | relative_url }}">
      {{ tag_name | upcase }} <span>{{ visible_posts.size }}</span>
    </a>
    {% endif %}
  {% endfor %}
</section>
