# Generated by Django 2.1.10 on 2019-08-12 18:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0030_unique_together_elective'),
    ]

    operations = [
        migrations.AlterField(
            model_name='electivesset',
            name='program',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='electives_set', to='courses.Program'),
        ),
    ]
