from django.urls import path, include

urlpatterns = [
    path('', include('thing.thing.urls')),
    path('category/', include('thing.category.urls')),
    path('list/', include('thing.list.urls')),
    path('message/', include('thing.message.urls')),
]