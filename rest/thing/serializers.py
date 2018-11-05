from rest_framework import serializers
from .models import Category, Thing, Message

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ThingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thing
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'