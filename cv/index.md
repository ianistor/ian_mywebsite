---
layout: default
title: "Resume"
permalink: /cv/
---

# Ioan Andrei Nistor

## Senior Technical Artist

Quick Links  
[ioan.andrei.nistor@gmail.com](mailto:ioan.andrei.nistor@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/ioan-andreinistor)  
[ArtStation](https://www.artstation.com/nistorandrei)  
[Fab](https://www.fab.com/sellers/IANistor)

---

## Resume Draft Variations

<label for="cv-variation-select"><strong>Choose draft:</strong></label>
<select id="cv-variation-select" class="cv-variation-select">
  <option value="v1">Draft 1 — Balanced</option>
  <option value="v2">Draft 2 — Compact</option>
  <option value="v3">Draft 3 — Skills First</option>
  <option value="v4">Draft 4 — Experience First</option>
  <option value="v5">Draft 5 — Latest Roles Focus</option>
  <option value="v6">Draft 6 — Massive Focus</option>
  <option value="v7">Draft 7 — Destruction + Houdini</option>
  <option value="v8">Draft 8 — Pipeline + Python</option>
  <option value="v9">Draft 9 — Minimal</option>
  <option value="v10">Draft 10 — Project-led</option>
</select>

<div class="cv-variation" data-variation="v1">

## Profile
Senior Technical Artist with 14+ years of AAA experience, specializing in Unreal Engine and Snowdrop workflows, procedural content, and performance-optimized real-time visuals.

## Core Skills
- Houdini
- Unreal Engine
- Python Scripting
- Asset Pipeline Management
- Performance Optimization
{: .cv-core-skills}

## Professional Experience
- <img src="{{ '/assets/images/companieslogos/ags_white_logo.png' | relative_url }}" alt="Amazon Games logo" class="company-logo-inline-inline"> **Technical Artist — Amazon Games (2024 - Current)**
- <img src="{{ '/assets/images/companieslogos/ubi_white_logo.png' | relative_url }}" alt="Ubisoft Romania logo" class="company-logo-inline-inline"> **Senior Technical Artist — Ubisoft Romania (2023 - 2024)**
- <img src="{{ '/assets/images/companieslogos/msv_logo.png' | relative_url }}" alt="Massive Entertainment logo" class="company-logo-inline-inline"> **Senior Technical Artist — Massive Entertainment (2022 - 2023)**
- <img src="{{ '/assets/images/companieslogos/msv_logo.png' | relative_url }}" alt="Massive Entertainment logo" class="company-logo-inline-inline"> **Technical Artist — Massive Entertainment (2018 - 2022)**
- <img src="{{ '/assets/images/companieslogos/msv_logo.png' | relative_url }}" alt="Massive Entertainment logo" class="company-logo-inline-inline"> **Technical Content Validator — Massive Entertainment (2015 - 2018)**
</div>

<div class="cv-variation" data-variation="v2">
## Profile
Senior Technical Artist. Unreal Engine. Snowdrop workflows. Procedural content. Performance-optimized real-time visuals.

## Core Skills
- Houdini
- Unreal Engine
- Python Scripting
- Node based systems
- Real Time Rendering
{: .cv-core-skills}
</div>

<div class="cv-variation" data-variation="v3">
## Core Skills
- Houdini
- Unreal Engine
- Python Scripting
- Node based systems
- Asset Pipeline Management
- Performance Optimization
- Physics Simulation (RBD)
- Real Time Rendering
- Problem solving
{: .cv-core-skills}

## Profile
Senior Technical Artist with 14+ years of AAA experience.
</div>

<div class="cv-variation" data-variation="v4">
## Professional Experience
**Technical Artist — Amazon Games (2024 - Current)**  
**Senior Technical Artist — Ubisoft Romania (2023 - 2024)**  
**Senior Technical Artist — Massive Entertainment, A Ubisoft Studio (2022 - 2023)**  
**Technical Artist — Massive Entertainment, A Ubisoft Studio (2018 - 2022)**  
**Technical Content Validator — Massive Entertainment, A Ubisoft Studio (2015 - 2018)**
</div>

<div class="cv-variation" data-variation="v5">
## Latest Roles
**Amazon Games (2024 - Current)**
- pipeline and editor tools using Python
- Unreal Engine scripted action tools and Blueprint-based workflows
- Chaos-based destruction systems integrated with Houdini simulations

**Ubisoft Romania (2023 - 2024)**
- destruction simulations in Houdini into the engine
- performance profiling and optimization
</div>

<div class="cv-variation" data-variation="v6">
## Massive Entertainment, A Ubisoft Studio
**Senior Technical Artist (2022 - 2023)**  
**Technical Artist (2018 - 2022)**  
**Technical Content Validator (2015 - 2018)**

- destruction simulations in Houdini into the engine
- performance profiling and optimization
- documentation on features and best practices
- supported DCC tools and pipeline workflows
</div>

<div class="cv-variation" data-variation="v7">
## Destruction + Houdini
- Built Chaos-based destruction systems integrated with Houdini simulations
- Created Houdini cloth and RBD simulations
- Developed and integrated destruction simulations in Houdini into the engine
- Led development improvements of engine systems, including physics, destruction, cloth simulation, and streaming
</div>

<div class="cv-variation" data-variation="v8">
## Pipeline + Python
- Designed and maintained pipeline and editor tools using Python
- Developed Unreal Engine scripted action tools and Blueprint-based workflows
- Maintained project DCC tools
- Supported DCC tools and pipeline workflows
- Used Python and internal tools to identify and replace expensive assets
</div>

<div class="cv-variation" data-variation="v9">
## Minimal
Senior Technical Artist with 14+ years of AAA experience.

Houdini • Unreal Engine • Python Scripting • Performance Optimization
</div>

<div class="cv-variation" data-variation="v10">
## Selected Projects
- New World Aeternum
- Star Wars Outlaws
- Tom Clancy's The Division 2
- Tom Clancy's The Division
- Assassin's Creed Unity
- Assassin's Creed Black Flag
- Assassin's Creed III
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('cv-variation-select');
    const blocks = Array.from(document.querySelectorAll('.cv-variation'));
    const show = (key) => {
      blocks.forEach((el) => {
        el.style.display = el.dataset.variation === key ? 'block' : 'none';
      });
    };
    show(select.value);
    select.addEventListener('change', (e) => show(e.target.value));
  });
</script>

---

## Links

- [LinkedIn](https://www.linkedin.com/in/ioan-andreinistor)
- [ArtStation](https://www.artstation.com/nistorandrei)
- [Fab](https://www.fab.com/sellers/IANistor)
