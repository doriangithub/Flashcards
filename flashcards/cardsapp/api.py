from rest_framework.decorators import permission_classes
from cardsapp.models import CardsSet
from rest_framework import viewsets, permissions
from .serializers import CardsSetSerializer

# CardsSetViewSet
class CardsSetViewSet(viewsets.ModelViewSet):
    queryset=CardsSet.objects.all()
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class=CardsSetSerializer


