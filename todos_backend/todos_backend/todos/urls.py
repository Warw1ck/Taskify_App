from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todos_backend.todos.views import NoteUpdateView, NoteDestroyView, NoteListView, NoteCreateView

urlpatterns = [
    path('', NoteListView.as_view()),
    path('<int:pk>/delete/', NoteDestroyView.as_view()),
    path('<int:pk>/update/', NoteUpdateView.as_view()),
    path('create/', NoteCreateView.as_view()),

]