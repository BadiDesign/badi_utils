from django.conf import settings

default_lang = getattr(settings, "BADI_I18N", "fa")
i18n_values = {
    'fa': {},
    'en': {},
}


class BadiI18n:
    lang = default_lang

    def __init__(self, lang=default_lang) -> None:
        self.lang = lang

    def t(self, value):
        return i18n_values[self.lang].get(value, value)
