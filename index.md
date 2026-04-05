---
layout: default
title: Home
---
# Welcome

Welcome to my technical artist site. Here you'll find blog posts about the processes behind tools and art, as well as links to the tools themselves.

## Tools

{% for tool in site.tools %}
- [{{ tool.title }}]({{ tool.url | relative_url }}): {{ tool.summary }}
{% endfor %}

## Projects

{% for project in site.projects %}
- [{{ project.title }}]({{ project.url | relative_url }}): {{ project.summary }}
{% endfor %}

## Blog Posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) – {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
