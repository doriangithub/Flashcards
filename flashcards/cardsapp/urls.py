from rest_framework import routers
from .api import CardsSetViewSet

router=routers.DefaultRouter()
router.register('api/sets', CardsSetViewSet, 'cardsset')

urlpatterns = router.urls

