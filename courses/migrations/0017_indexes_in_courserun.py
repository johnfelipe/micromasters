# -*- coding: utf-8 -*-
# Generated by Django 1.9.10 on 2016-11-02 18:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0016_unique_course_run_edx_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courserun',
            name='end_date',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
        migrations.AlterField(
            model_name='courserun',
            name='enrollment_end',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
        migrations.AlterField(
            model_name='courserun',
            name='enrollment_start',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
        migrations.AlterField(
            model_name='courserun',
            name='start_date',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
        migrations.AlterField(
            model_name='courserun',
            name='upgrade_deadline',
            field=models.DateTimeField(blank=True, db_index=True, null=True),
        ),
    ]
