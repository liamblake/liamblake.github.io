---
layout: page
permalink: /talks/
title: Talks
nav: true
nav_order: 4
---

{% assign talks_items = site.data.talks | sort: 'date' | reverse %}

A collection of talks I have given, some more formal than others. Slides and Github repositories are linked where available. 

<ul>
{% for item in talks_items %}
  <li>
    <b>{{ item.title }}</b> <br>
    <em>{{ item.event }}</em> <br>
    {{ item.date | date: "%e %B %Y" }}, {{ item.location }} <br>
    {% if item.slides %} <a href="/talks/{{ item.slides }}">Slides</a>. {% endif %}
    {% if item.github %} <a href="https://github.com/liamblake/{{ item.github }}">Github</a>. {% endif %}
  </li>
{% endfor %}
</ul>
