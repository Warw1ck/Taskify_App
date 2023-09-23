from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todos_backend.todos.views import NoteRetrieveUpdateDestroyView

router = DefaultRouter()

router.register(r'notes', NoteRetrieveUpdateDestroyView)


urlpatterns = [
    path('', include(router.urls)),
]