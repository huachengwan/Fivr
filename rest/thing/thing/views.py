from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from thing.serializers import ThingSerializer
from thing.models import Thing

class ThingViewset(viewsets.ViewSet):
    serializer_class = ThingSerializer
    permission_classes_by_action = {
        'post': [permissions.IsAuthenticated],
        'get': [permissions.AllowAny],
    }
    # permission_classes = [permissions.AllowAny]
    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]

    def post(self, request):
        name = request.data.get('name')
        category_id = request.data.get('category_id')
        type_id = request.data.get('type_id')
        price_type_id = request.data.get('price_type_id')
        price_from = request.data.get('price_from',15)
        created_by_id = request.data.get('created_by_id')
        if name is None or type_id is None or category_id is None or price_type_id is None or created_by_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        thing = Thing(name=name, category_id=category_id, type_id=type_id, price_type_id=price_type_id, created_by_id=created_by_id, price_from=price_from)
        thing.save()
        return Response(status=status.HTTP_200_OK)

    def get(self, request):
        thing_id = request.data.get('thing_id')
        if thing_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        thing = Thing.objects.get(pk=thing_id)
        if thing is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(thing)
        data = serializer.data
        return Response(data)

