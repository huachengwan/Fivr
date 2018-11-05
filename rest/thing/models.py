from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

class Type(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

class PriceType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

class Thing(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    type = models.ForeignKey(Type, on_delete=models.PROTECT)
    price_type = models.ForeignKey(PriceType, on_delete=models.PROTECT)
    price_from = models.IntegerField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_on = models.DateField(auto_now_add=True)

class More(models.Model):
    id = models.AutoField(primary_key=True)
    thing = models.ForeignKey(Thing, on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=100)

class Stat(models.Model):
    id = models.AutoField(primary_key=True)
    thing = models.ForeignKey(Thing, on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=100)

class Message(models.Model):
    id = models.AutoField(primary_key=True)
    thing = models.ForeignKey(Thing, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    sent_on =models.DateField(auto_now_add=True)

class Related(models.Model):
    id = models.AutoField(primary_key=True)
    thing = models.ForeignKey(Thing, on_delete=models.CASCADE)
    related_thing = models.ForeignKey(Thing, related_name='related_thing', on_delete=models.CASCADE)

class Recommended(models.Model):
    id = models.AutoField(primary_key=True)
    thing = models.ForeignKey(Thing, on_delete=models.CASCADE)