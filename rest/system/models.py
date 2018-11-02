from django.db import models
from django.contrib.auth.models import User

class UserMore(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, related_name='mores', on_delete=models.CASCADE)
    key = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    date_updated = models.DateField(auto_now=True)
