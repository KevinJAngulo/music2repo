# Generated by Django 4.0.4 on 2022-04-14 06:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('music2', '0007_alter_rating_song'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rating',
            name='song',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='music2.artist'),
        ),
    ]
