from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todos_backend.todos.views import NoteViewSet

router = DefaultRouter()
router.register(r'notes', NoteViewSet)


urlpatterns = [
    path('', include(router.urls)),
]