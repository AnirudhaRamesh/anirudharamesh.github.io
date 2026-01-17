---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
---

Welcome to my blog where I share thoughts on AI, machine learning, robotics, and technical research. These posts explore interesting problems, ideas, and insights from my work.

{% include base_path %}

{% assign posts = site.posts | sort: 'date' | reverse %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}
