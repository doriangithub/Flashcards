from django.db.models import fields
from rest_framework import serializers
from cardsapp.models import CardsSet

# CardsSet serializer
class CardsSetSerializer(serializers.ModelSerializer):
    class Meta:
        model=CardsSet
        fields='__all__'

