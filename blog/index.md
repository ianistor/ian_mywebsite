---
layout: default
title: Blog
---
# Blog

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

*{{ post.date | date: '%B %d, %Y' }}{% if post.tags %} • {{ post.tags | join: ', ' }}{% endif %}*

{{ post.excerpt | strip_html | truncatewords: 40 }}

---
{% endfor %}
