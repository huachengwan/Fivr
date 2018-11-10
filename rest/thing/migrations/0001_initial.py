# Generated by Django 2.1.3 on 2018-11-09 17:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=300)),
            ],
        ),
        migrations.CreateModel(
            name='CategoryKind',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('commented_on', models.DateField(auto_now_add=True)),
                ('commented_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('sent_on', models.DateField(auto_now_add=True)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('key', models.CharField(max_length=100)),
                ('file', models.FileField(upload_to='project_img')),
            ],
        ),
        migrations.CreateModel(
            name='More',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('key', models.CharField(max_length=100)),
                ('value', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='PriceType',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Recommended',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Related',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Thing',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('price_from', models.IntegerField()),
                ('description', models.TextField()),
                ('created_on', models.DateField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='thing.Category')),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='thing.City')),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('price_type', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='thing.PriceType')),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='thing',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='thing.Type'),
        ),
        migrations.AddField(
            model_name='related',
            name='related_thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='related_thing', to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='related',
            name='thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='recommended',
            name='thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='more',
            name='thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='file',
            name='thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='contact',
            name='thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='comment',
            name='thing',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='thing.Thing'),
        ),
        migrations.AddField(
            model_name='category',
            name='kind',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='thing.CategoryKind'),
        ),
    ]
