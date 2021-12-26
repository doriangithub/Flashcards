from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class CardsSet(models.Model):
    setName = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    owner=models.ForeignKey(User, related_name="cardsSets", on_delete=models.CASCADE, null=True)

