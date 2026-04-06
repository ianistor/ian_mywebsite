---
layout: project
title: "Star Wars Outlaws"
role: "Senior Technical Artist"
company: "Massive Entertainment"
summary: "Built destruction workflows, Houdini tools, and gameplay-integrated visual systems for production."
image: "/assets/images/projectcovers/SWO.png"
release_year: 2024
permalink: /projects/star-wars-outlaws/
links:
  - label: "ArtStation"
    url: "https://www.artstation.com/nistorandrei/albums/10848560"
---

## Overview

Star Wars Outlaws is presented here as a main project page with several focused breakdowns instead of one oversized page.

## Deep dives

{% assign sw_pages = site.pages | where: "parent_slug", "star-wars-outlaws" | sort: "title" %}

<div class="card-grid">
  {% for subpage in sw_pages %}
    <article class="card">
      <a href="{{ subpage.url | relative_url }}">
        {% if subpage.image %}
          <img src="{{ subpage.image | relative_url }}" alt="" class="card-thumb">
        {% elsif subpage.youtube_id %}
          <img src="https://img.youtube.com/vi/{{ subpage.youtube_id }}/hqdefault.jpg" alt="" class="card-thumb">
        {% else %}
          <img src="{{ '/assets/images/placeholder.png' | relative_url }}" alt="" class="card-thumb">
        {% endif %}
      </a>
      <h3><a href="{{ subpage.url | relative_url }}">{{ subpage.title }}</a></h3>
      {% if subpage.summary %}
        <p>{{ subpage.summary }}</p>
      {% endif %}
    </article>
  {% endfor %}
</div>
