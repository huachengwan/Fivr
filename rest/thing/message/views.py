from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from thing.serializers import MessageSerializer
from thing.models import Message, Thing

class MessageViewset(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        thing_id = request.data.get('thing_id')
        if thing_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        messages = Message.objects.filter(thing_id=thing_id)
        serializer = self.get_serializer(messages, many=True)
        data = serializer.data
        return Response(data)

    def send(self, request):
        thing_id = request.data.get('thing_id')
        if thing_id is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        sender = request.user
        thing = Thing.objects.get(pk=thing_id)
        title = request.data.get('title')
        description = request.data.get('description')
        if title is None or description is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        message = Message(sender=sender, thing=thing, title=title, description=description)
        message.save()
        return Response(status=status.HTTP_200_OK)