This is the autobiography of Bonnie Shell.

<ul>
{% for story in stories %}
    <li><a href="/story/{{ story.slug }}/">{{ story.title }}</a></li>
{% endfor %}
</ul>
