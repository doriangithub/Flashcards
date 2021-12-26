from rest_framework.decorators import permission_classes
from cardsapp.models import CardsSet
from rest_framework import viewsets, permissions
from .serializers import CardsSetSerializer

# CardsSet ViewSet
class CardsSetViewSet(viewsets.ModelViewSet):
    queryset=CardsSet.objects.all()
    permission_classes=[
        permissions.IsAuthenticated,
    ]
    serializer_class=CardsSetSerializer

    def get_queryset(self):
        return self.request.user.cardsSets.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
