from django.urls import path
from . import views

urlpatterns = [
    path('login', views.try_login),
    path('signup', views.signup),
    path('test', views.UserViewset.as_view({'get':'show_all'})),
]