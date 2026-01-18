---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
---

Thoughts on AI, robotics, and perhaps life.

{% include base_path %}

{% assign posts = site.posts | sort: 'date' | reverse %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}
