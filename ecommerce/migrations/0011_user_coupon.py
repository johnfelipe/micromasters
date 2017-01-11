# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2017-01-06 19:31
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ecommerce', '0010_coupon'),
    ]

    operations = [
        migrations.AddField(
            model_name='coupon',
            name='coupon_type',
            field=models.CharField(choices=[('standard', 'standard'), ('discounted-previous-course', 'discounted-previous-course')], help_text='The type of the coupon which describes what circumstances the coupon can be redeemed', max_length=30),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='UserCoupon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='coupon',
            name='num_coupons_available',
        ),
        migrations.RemoveField(
            model_name='coupon',
            name='num_redemptions_per_user',
        ),
        migrations.AddField(
            model_name='usercoupon',
            name='coupon',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='ecommerce.Coupon'),
        ),
        migrations.AddField(
            model_name='usercoupon',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterUniqueTogether(
            name='usercoupon',
            unique_together=set([('user', 'coupon')]),
        ),
    ]
