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
    <a class="tag-chip" href="{{ '/tags/' | append: tag_name | downcase | append: '/' | relative_url }}">
      {{ tag_name | upcase }} <span>{{ tag[1].size }}</span>
    </a>
  {% endfor %}
</section>
