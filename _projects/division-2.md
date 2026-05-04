---
layout: project
title: "The Division 2"
role: "Technical Artist"
company: "Massive Entertainment"
summary: "Technical-art ownership for reusable environment and gameplay workflows, with production tooling that sped up team iteration."
image: "/assets/images/projectcovers/TCTD2.jpg"
release_year: 2019
permalink: /projects/division-2/
links:
  - label: "ArtStation"
    url: "https://nistorandrei.artstation.com"
trailer_video: "/assets/videos/TCTD2.mp4"
---

## Overview

The Division 2 work featured technical-art support across environment systems and gameplay-facing setups, with a focus on reusable workflows for production content.

## Deep dives

{% assign div2_pages = site.pages | where: "parent_slug", "division-2" | sort: "title" %}

<div class="card-grid">
  {% for subpage in div2_pages %}
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
