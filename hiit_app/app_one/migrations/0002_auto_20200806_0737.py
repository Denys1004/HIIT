# Generated by Django 2.2 on 2020-08-06 11:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_one', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='sportsmen',
        ),
        migrations.RemoveField(
            model_name='song',
            name='training',
        ),
        migrations.RemoveField(
            model_name='training',
            name='executor',
        ),
        migrations.RemoveField(
            model_name='training',
            name='poster',
        ),
        migrations.DeleteModel(
            name='Exercise',
        ),
        migrations.DeleteModel(
            name='Song',
        ),
        migrations.DeleteModel(
            name='Training',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
