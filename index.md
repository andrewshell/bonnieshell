This is the autobiography of Bonnie Shell.

<ol>
{% for story in stories %}
{% if 0 < story.slug.length %}<li><a href="/story/{{ story.slug }}/">{{ story.title }}</a></li>{% endif %}
{% endfor %}
</ol>
