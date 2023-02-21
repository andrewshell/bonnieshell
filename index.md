This is the autobiography of Bonnie Shell.

<ul>
{% for story in stories %}
    <li><a href="/story/{{ story }}/">{{ story }}</a></li>
{% endfor %}
</ul>
