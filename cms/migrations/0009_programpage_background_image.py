# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-06-09 15:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0012_copy_image_permissions_to_collections'),
        ('cms', '0008_frequentlyaskedquestion'),
    ]

    operations = [
        migrations.AddField(
            model_name='programpage',
            name='background_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
    ]
