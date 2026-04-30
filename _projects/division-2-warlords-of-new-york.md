---
layout: project
title: "The Division 2 - Warlords of New York"
role: "Technical Artist"
company: "Massive Entertainment"
summary: "Expansion-focused content support with tool and workflow contributions for live production."
image: "/assets/images/projectcovers/TCTD2WONY.png"
release_year: 2020
permalink: /projects/division-2-warlords-of-new-york/
links:
  - label: "ArtStation"
    url: "https://nistorandrei.artstation.com/albums/915382"
---

## Overview

Warlords of New York is presented here with focused deep dives for specific technical-art workflows and implementation details.

## Deep dives

{% assign wony_pages = site.pages | where: "parent_slug", "division-2-warlords-of-new-york" | sort: "title" %}

<div class="card-grid">
  {% for subpage in wony_pages %}
    <article class="card">
      <a href="{{ subpage.url | relative_url }}">
        {% assign first_media_src = nil %}
        {% assign page_content = subpage.content | default: '' %}
        {% if page_content contains 'src="' %}
          {% assign first_media_src = page_content | split: 'src="' | slice: 1, 1 | first | split: '"' | first %}
        {% endif %}

        {% if subpage.image %}
          <img src="{{ subpage.image | relative_url }}" alt="" class="card-thumb">
        {% elsif subpage.youtube_id %}
          <img src="https://img.youtube.com/vi/{{ subpage.youtube_id }}/hqdefault.jpg" alt="" class="card-thumb">
        {% elsif first_media_src %}
          <img src="{{ first_media_src | relative_url }}" alt="" class="card-thumb">
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
