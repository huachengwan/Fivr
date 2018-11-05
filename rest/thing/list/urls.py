from django.urls import path, include
from . import views

urlpatterns = [
    path('search', views.ListViewset.as_view({'get': 'search'})),
    path('recommended', views.ListViewset.as_view({'get': 'recommended'})),
]