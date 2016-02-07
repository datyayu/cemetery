from django.conf.urls import url, include
from snippets.views import SnippetViewSet, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'snippets', SnippetViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
]
