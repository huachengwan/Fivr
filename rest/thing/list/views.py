from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from thing.serializers import ThingSerializer
from thing.models import Thing, Recommended

class ListViewset(viewsets.ModelViewSet):
    serializer_class = ThingSerializer
    permission_classes = [permissions.AllowAny]

    def search(self, request):
        # search by category, name
        category_id = request.data.get('category_id')
        keyword = request.data.get('keyword')
        if category_id is None and keyword is None:
            things = Thing.objects.all()
        else:
            if category_id is not None and keyword is not None:
                things = Thing.objects.filter(category_id=category_id, name__contains=keyword)
            else:
                if keyword is not None:
                    things = Thing.objects.filter(name__contains=keyword)
                if category_id is not None:
                    things = Thing.objects.filter(category_id=category_id)
        serializer = self.get_serializer(things, many=True)
        data = serializer.data
        return Response(data)

    def recommended(self, request):
        things = []
        recommendeds = Recommended.objects.all()
        for recommended in recommendeds:
            things.append(recommended.thing)

        serializer = self.get_serializer(things, many=True)
        data = serializer.data
        return Response(data)