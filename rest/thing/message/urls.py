from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.MessageViewset.as_view({'get': 'list', 'post': 'send'}))
]