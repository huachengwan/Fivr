from django.urls import path
from . import views

urlpatterns = [
    path('', views.ThingViewset.as_view({'get': 'get', 'post': 'post'})),
]