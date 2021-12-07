from django.db import models

# Create your models here.
class CardsSet(models.Model):
    setName = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)

