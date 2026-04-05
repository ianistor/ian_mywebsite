---
layout: default
title: Tools
---
<h1>Tools</h1>
{% for tool in site.tools %}
  <div class="card">
    <h3><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h3>
    <p>{{ tool.summary }}</p>
  </div>
{% endfor %}
