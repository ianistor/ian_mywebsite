---
layout: default
title: Tools
---
# Tools

{% for tool in site.tools %}
## [{{ tool.title }}]({{ tool.url | relative_url }})

{% if tool.image %}
![{{ tool.title }}]({{ tool.image | relative_url }})
{% endif %}

{{ tool.summary }}

{% if tool.links %}
<ul>
{% for link in tool.links %}
  <li><a href="{{ link.url }}">{{ link.label }}</a></li>
{% endfor %}
</ul>
{% endif %}

{{ tool.content | markdownify }}

---
{% endfor %}
