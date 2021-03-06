# -*- coding: utf-8 -*-
# Generated by Django 1.9.10 on 2016-11-03 18:38
from __future__ import unicode_literals

from django.db import migrations, models


def copy_country_of_residence(apps, schema_editor):
    """
    Copy birth_country from Profile to FinancialAid
    """
    FinancialAid = apps.get_model('financialaid.FinancialAid')
    for financial_aid in FinancialAid.objects.select_related('user__profile').all():
        financial_aid.country_of_residence = financial_aid.user.profile.country
        financial_aid.save()


class Migration(migrations.Migration):

    dependencies = [
        ('financialaid', '0019_protect_audit'),
        ('profiles', '0019_switch_jsonfield'),
    ]

    operations = [
        migrations.AddField(
            model_name='financialaid',
            name='country_of_residence',
            field=models.TextField(null=True, blank=True),
            preserve_default=False,
        ),
        migrations.RunPython(copy_country_of_residence, reverse_code=lambda apps, schema_editor: None),
        migrations.AlterField(
            model_name='financialaid',
            name='country_of_residence',
            field=models.TextField(),
            preserve_default=False,
        ),
    ]
