# Generated by Django 3.2.7 on 2021-12-06 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cardsapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CardsSet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('setName', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
