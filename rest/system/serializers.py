from rest_framework import serializers
from django.contrib.auth.models import User
# from .models import UserMore

class UserSerializer(serializers.ModelSerializer):
    #more = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = '__all__'

    # def get_more(self, obj):
    #     mores = UserMore.objects.filter(user=obj)
    #     data = {}
    #     for more in mores:
    #         data[more.key] = more.value
    #     return data

