from django import template
from django.shortcuts import render
from django.template import Template
from django.views.generic import TemplateView
from jinja2 import TemplateSyntaxError

register = template.Library()


@register.simple_tag(takes_context=True)
def badi_include(context, file):
    import os
    x = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filepath = os.path.join(x, "templates", file)
    output = ''
    try:
        fp = open(filepath, 'r')
        output = fp.read()
        fp.close()
    except IOError:
        output = ''
    try:
        t = Template(output, name=filepath)
        return t.render(context)
    except TemplateSyntaxError as e:
        return ''  # Fail silently.
