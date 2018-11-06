from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Category, Thing, Message, PriceType, Type, File, More
from django.http import HttpRequest

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ThingSerializer(serializers.ModelSerializer):
    main_image__name = serializers.SerializerMethodField()
    type__name = serializers.SerializerMethodField()
    created_by__name = serializers.SerializerMethodField()
    category__name = serializers.SerializerMethodField()
    price_type__name = serializers.SerializerMethodField()
    more = serializers.SerializerMethodField()

    class Meta:
        model = Thing
        fields = '__all__'

    def get_main_image__name(self, obj):
        try:
            file = File.objects.get(thing=obj)
            return file.file.name
        except File.DoesNotExist:
            return 'project_img/__no_image__.jpg'

    def get_created_by__name(self, obj):
        user = User.objects.get(pk=obj.created_by_id)
        return user.username
    def get_category__name(self, obj):
        category = Category.objects.get(pk=obj.category_id)
        return category.name
    def get_type__name(self, obj):
        type = Type.objects.get(pk=obj.type_id)
        return type.name
    def get_price_type__name(self, obj):
        priceType = PriceType.objects.get(pk=obj.price_type_id)
        return priceType.name
    def get_more(self, obj):
        mores = More.objects.filter(thing=obj)
        data = {}
        for more in mores:
            data[more.key] = more.value
        return data

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class PriceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceType
        fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'
