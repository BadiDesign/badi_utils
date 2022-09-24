import datetime
import re

from django.contrib import admin
from django.contrib.sites import apps
from django.core import exceptions
from django.db import models

from src.badi_utils.utils import custom_change_date

pattern_date = re.compile(r'(\d+/\d+/\d+)')


class PersianDateField(models.DateField):

    def to_python(self, value):

        if value is None:
            return value
        if type(value) is str:
            try:
                if pattern_date.match(value):
                    value = custom_change_date(value, 6).strftime('%Y-%m-%d')
                else:
                    raise exceptions.ValidationError(
                        self.error_messages['invalid'],
                        code='invalid',
                        params={'value': value},
                    )
            except ValueError:
                raise exceptions.ValidationError(
                    self.error_messages['invalid_date'],
                    code='invalid_date',
                    params={'value': value},
                )

        return super().to_python(value)


class PersianDateTimeField(models.DateTimeField):

    def to_python(self, value):

        if value is None:
            return value
        if type(value) is str:
            try:
                if pattern_datetime.match(value):
                    value = custom_change_date(value, 3)
                    value = value.strftime('%Y-%m-%d %H:%M:%S')
                else:
                    raise exceptions.ValidationError(
                        self.error_messages['invalid'],
                        code='invalid',
                        params={'value': value},
                    )
            except ValueError:
                raise exceptions.ValidationError(
                    self.error_messages['invalid_date'],
                    code='invalid_date',
                    params={'value': value},
                )

        return super().to_python(value)


def set_admin(module):
    for key, model in apps.get_app_config(module).models.items():
        admin.site.register(model)