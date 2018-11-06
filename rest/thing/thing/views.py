from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from thing.serializers import ThingSerializer
from thing.models import Thing, File, Category, PriceType, Type, More

class ThingViewset(viewsets.ModelViewSet):
    serializer_class = ThingSerializer
    permission_classes_by_action = {
        'post': [permissions.IsAuthenticated],
        'get': [permissions.AllowAny],
    }
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
        price_from = request.data.get('price_from', 15)
        image_file = request.data.get('image_file0')
        description = request.data.get('description')
        if name is None or type_id is None or category_id is None or price_type_id is None or  image_file is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        category = Category.objects.get(pk=category_id)
        type = Type.objects.get(pk=type_id)
        price_type = PriceType.objects.get(pk=price_type_id)
        thing = Thing(name=name, category=category, type=type, price_type=price_type, created_by=request.user, price_from=price_from)
        thing.save()
        file = File(thing=thing, key='main_image', file=image_file)
        file.save()
        more = More(thing=thing, key='description', value=description)
        more.save()

        return Response(status=status.HTTP_200_OK)

    def get(self, request, id):
        id = id
        thing = Thing.objects.get(pk=id)
        if thing is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(thing)
        data = serializer.data
        relation = 'none'
        if request.user.is_authenticated:
            if thing.created_by_id == request.user.id:
                relation = 'owner'
            else:
                relation = 'contactable'
        return Response({'data': data, 'relation': relation}, status=status.HTTP_200_OK)

