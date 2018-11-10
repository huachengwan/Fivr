from django import forms
from django.contrib import admin
from .models import Category, City, Type, PriceType, CategoryKind, Recommended

class CityForm(forms.ModelForm):
    class Meta:
        model = City
        fields = '__all__'
class CityAdmin(admin.ModelAdmin):
    form = CityForm
admin.site.register(City, CityAdmin)

class CategoryKindForm(forms.ModelForm):
    class Meta:
        model = CategoryKind
        fields = '__all__'
class CategoryKindAdmin(admin.ModelAdmin):
    form = CategoryKindForm
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    ordering = ['id']
admin.site.register(CategoryKind, CategoryKindAdmin)

class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'
class CategoryAdmin(admin.ModelAdmin):
    form = CategoryForm
    list_display = ('id', 'name', 'description', 'category_kind')
    list_display_links = ('id', 'name')
    ordering = ['id']
    def category_kind(self, obj):
        return obj.kind.name
admin.site.register(Category, CategoryAdmin)

class TypeForm(forms.ModelForm):
    class Meta:
        model = Type
        fields = '__all__'
class TypeAdmin(admin.ModelAdmin):
    form = TypeForm
admin.site.register(Type, TypeAdmin)

class PriceTypeForm(forms.ModelForm):
    class Meta:
        model = PriceType
        fields = '__all__'
class PriceTypeAdmin(admin.ModelAdmin):
    form = PriceTypeForm
admin.site.register(PriceType, PriceTypeAdmin)

class RecommendedForm(forms.ModelForm):
    class Meta:
        model = Recommended
        fields = '__all__'
class RecommendedAdmin(admin.ModelAdmin):
    form = RecommendedForm
admin.site.register(Recommended, RecommendedAdmin)