# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-06 19:21
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='percolatequery',
            name='original_query',
            field=django.contrib.postgres.fields.jsonb.JSONField(default={}),
            preserve_default=False,
        ),
    ]
