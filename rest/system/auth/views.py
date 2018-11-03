from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from system.serializers import UserSerializer
from system.models import UserMore
import re
from rest_framework import viewsets, status, permissions

@csrf_exempt
@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def try_login(request):
    username = request.data['username']
    password = request.data['password']
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'}, status=status.HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    data = serializer.data
    return Response({'token': token.key, 'userAccount': data}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def signup(request):
    email = request.data.get('email')
    password = request.data.get('password')
    username = request.data.get('username')

    lists = request.data.dict()
    mores = {k.replace('more[', '').replace(']',''):v for k, v in lists.items() if re.match(r'more\[.*?\]',k)}

    if not username and not password and not email:
        return Response({'error': 'Please provide both username and password'}, status=status.HTTP_400_BAD_REQUEST)
    new_user = User.objects.create_user(username=username, password=password, email=email)
    if mores:
        for k,v in mores.items():
            userMore = UserMore(user=new_user, key=k, value=v)
            userMore.save()
    # token, _ = Token.objects.get_or_create(user=new_user)
    return Response(status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def test(request):
    user = User.objects.get(id=4)
    serializer = UserSerializer(user)
    data = serializer.data
    return Response({'data': data}, status=status.HTTP_200_OK)

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def show_all(self, request):
        users = User.objects.filter(is_active=1, is_staff=0)
        serializer = self.get_serializer(users, many=True)
        data = serializer.data
        return Response(data)
