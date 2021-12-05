from rest_framework.decorators import permission_classes
from cardsapp.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

# UserViewSet
class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=UserSerializer


