---
layout: default
title: Projects
---
# Projects

{% for project in site.projects %}
## [{{ project.title }}]({{ project.url | relative_url }})

{% if project.image %}
![{{ project.title }}]({{ project.image | relative_url }})
{% endif %}

{{ project.summary }}

{% if project.links %}
<ul>
{% for link in project.links %}
  <li><a href="{{ link.url }}">{{ link.label }}</a></li>
{% endfor %}
</ul>
{% endif %}

{{ project.content | markdownify }}

---
{% endfor %}