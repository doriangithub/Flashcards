from django.db.models import fields
from rest_framework import serializers
from cardsapp.models import User

# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

