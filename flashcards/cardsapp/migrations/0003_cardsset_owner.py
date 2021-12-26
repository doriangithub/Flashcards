# Generated by Django 3.2.7 on 2021-12-26 19:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cardsapp', '0002_auto_20211205_1625'),
    ]

    operations = [
        migrations.AddField(
            model_name='cardsset',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cardsSets', to=settings.AUTH_USER_MODEL),
        ),
    ]
