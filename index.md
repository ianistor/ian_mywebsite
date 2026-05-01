---
layout: default
title: Home
---

<section class="hero hero-with-video-bg">
  <div class="hero-video-shell" aria-hidden="true">
    <video class="hero-bg-video" autoplay muted loop playsinline preload="metadata">
      <source src="{{ '/assets/videos/TCTD.mp4' | relative_url }}" type="video/mp4">
    </video>
    <div class="hero-video-overlay"></div>
  </div>
  <div class="hero-content hero-content-elevated">
    <p class="eyebrow hero-eyebrow">Technical Artist · Game Developer · Procedural Artist</p>
    <h1 class="hero-title">Senior Technical Artist with 14+ years of AAA game development.</h1>
    <p class="lead hero-lead">Hi, I'm Ioan-Andrei Nistor, Senior Technical Artist with 14+ years of AAA experience, love improving workflows, problem solving, procedural content and real-time visuals. I have proven track record developing tools, destruction systems, and gameplay systems/solutions while mentoring teams, establishing best practices, and driving clear documentation to scale production across disciplines.</p>

  </div>

  <div class="hero-image-container hero-content-elevated">
    <img src="{{ '/assets/images/profile_photo.png' | relative_url }}" alt="Portrait of Ioan-Andrei Nistor" class="hero-image">
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-bg-video');
    if (!heroVideo) return;

    const videoPool = [
      "{{ '/assets/videos/TCTD.mp4' | relative_url }}",
      "{{ '/assets/videos/TCTD2.mp4' | relative_url }}",
      "{{ '/assets/videos/NWA.mp4' | relative_url }}",
      "{{ '/assets/videos/SWO.mp4' | relative_url }}"
    ];

    if (videoPool.length < 2) return;

    let currentIndex = Math.floor(Math.random() * videoPool.length);

    const swapVideo = () => {
      let nextIndex = currentIndex;
      while (nextIndex === currentIndex) {
        nextIndex = Math.floor(Math.random() * videoPool.length);
      }

      currentIndex = nextIndex;
      heroVideo.src = videoPool[currentIndex];
      heroVideo.load();
      heroVideo.play().catch(() => {});
    };

    heroVideo.addEventListener('ended', swapVideo);
    swapVideo();
  });
</script>

<section class="section-block">
  <div class="section-head">
    <h2>Projects</h2>
    <a href="{{ '/projects/' | relative_url }}">See all</a>
  </div>
  <p class="section-intro">Here's what I've shipped across AAA productions, from gameplay-facing systems to workflow and pipelines to performance improvements.</p>

  <div class="projects-row-wrap">
    <div class="projects-row-hint">Scroll for more</div>

    <div class="projects-row">
      {% assign sorted_projects = site.projects | sort: "release_year" | reverse %}
      {% for project in sorted_projects %}
        {% if project.hidden != true %}
        <article class="project-row-card js-clickable-card" data-href="{{ project.url | relative_url }}" role="link" tabindex="0" aria-label="Open {{ project.title }}">
          <div class="project-row-media">
            {% assign placeholder_label = project.placeholder_text | default: project.title | default: "Unannounced Project" %}
            {% if project.show_text_placeholder == true or project.image == blank %}
              <div class="project-row-image project-text-placeholder" aria-label="{{ placeholder_label }}">
                <span>{{ placeholder_label }}</span>
              </div>
            {% else %}
              <img src="{{ project.image | relative_url }}" alt="{{ project.title }} thumbnail" class="project-row-image">
            {% endif %}
            <p class="project-card-summary">{{ project.summary }}</p>
          </div>
          <div class="project-row-copy">
            <h3 class="project-card-title"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>

            {% if project.company or project.role %}
              <p class="meta project-card-meta">
                {% if project.company %}{{ project.company }}{% endif %}
                {% if project.company and project.role %} · {% endif %}
                {% if project.role %}{{ project.role }}{% endif %}
              </p>
            {% endif %}

          </div>
        </article>
        {% endif %}
      {% endfor %}
    </div>

    <div class="projects-row-dots" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
  </div>
</section>

<section class="section-block showcase-wall">
  <div class="section-head showcase-head">
    <div>
      <h2>Blog</h2>
      <p class="section-subtitle">Breakdowns, tools, and technical deep-dives from the studio floor.</p>
    </div>
    <a href="{{ '/blog/' | relative_url }}">See all</a>
  </div>

  <div class="showcase-grid showcase-grid-blog">
    {% for post in site.posts limit: 2 %}
      {% if post.hidden != true %}
      <article class="showcase-card js-clickable-card" data-href="{{ post.url | relative_url }}" role="link" tabindex="0" aria-label="Open {{ post.title }}">
        {% assign placeholder_label = post.placeholder_text | default: post.title | default: "Blog Post" %}
        {% if post.show_text_placeholder == true or post.image == blank %}
          <div class="showcase-thumb project-text-placeholder" aria-label="{{ placeholder_label }}"><span>{{ placeholder_label }}</span></div>
        {% else %}
          <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="showcase-thumb">
        {% endif %}
        <div class="showcase-body">
          {% if post.tags %}
          <div class="showcase-tags">
            {% for tag in post.tags limit: 3 %}<span>{{ tag | upcase }}</span>{% endfor %}
          </div>
          {% endif %}
          <p class="showcase-date">{{ post.date | date: "%B %-d, %Y" }}</p>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncate: 140 }}</p>
          <span class="showcase-link">Read post →</span>
        </div>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="section-block showcase-wall">
  <div class="section-head showcase-head">
    <div>
      <h2>Tools</h2>
      <p class="section-subtitle">Custom tools built to solve real production problems — publicly available.</p>
    </div>
    <a href="{{ '/tools/' | relative_url }}">See all</a>
  </div>

  <div class="showcase-grid showcase-grid-tools">
    {% for tool in site.tools limit: 3 %}
      <article class="showcase-card showcase-card-compact js-clickable-card" data-href="{{ tool.url | relative_url }}" role="link" tabindex="0" aria-label="Open {{ tool.title }}">
        {% assign placeholder_label = tool.placeholder_text | default: tool.title | default: "Tool" %}
        {% if tool.show_text_placeholder == true or tool.image == blank %}
          <div class="showcase-thumb project-text-placeholder" aria-label="{{ placeholder_label }}"><span>{{ placeholder_label }}</span></div>
        {% else %}
          <img src="{{ tool.image | relative_url }}" alt="{{ tool.title }}" class="showcase-thumb">
        {% endif %}
        <div class="showcase-body">
          <h3><a href="{{ tool.url | relative_url }}">{{ tool.title }}</a></h3>
          <p>{{ tool.summary | default: tool.excerpt | strip_html | truncate: 120 }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section-block" id="contact">
  <div class="section-head">
    <h2>Contact</h2>
  </div>
  <div class="card contact-box contact-strip">
    <div class="contact-copy">
      <h3>Let's connect</h3>
      <p>Always open to discussing new projects, tools, and technical art solutions.</p>
    </div>

    <ul class="contact-list contact-list-inline" aria-label="Social links">
      <li>
        <a href="mailto:{{ site.email }}" class="contact-icon-link" aria-label="Email">
          <span class="contact-icon" aria-hidden="true">✉</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ioan-andrei-nistor/" target="_blank" rel="noopener noreferrer" class="contact-icon-link" aria-label="LinkedIn">
          <span class="contact-icon" aria-hidden="true">in</span>
        </a>
      </li>
      <li>
        <a href="https://www.artstation.com/nistorandrei" target="_blank" rel="noopener noreferrer" class="contact-icon-link" aria-label="ArtStation">
          <span class="contact-icon contact-icon-artstation" aria-hidden="true">
            <img src="https://raw.githubusercontent.com/ianistor/ian_website/main/assets/images/companieslogos/artstation_grey.png" alt="" class="contact-icon-img" loading="lazy" decoding="async">
          </span>
        </a>
      </li>
      <li>
        <a href="https://github.com/ianistor" target="_blank" rel="noopener noreferrer" class="contact-icon-link" aria-label="GitHub">
          <span class="contact-icon" aria-hidden="true">GitHub</span>
        </a>
      </li>
    </ul>
  </div>
</section>
