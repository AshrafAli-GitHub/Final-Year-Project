# Generated by Django 4.1 on 2023-05-02 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='deck',
            name='description',
            field=models.CharField(default=None, max_length=600),
            preserve_default=False,
        ),
    ]
