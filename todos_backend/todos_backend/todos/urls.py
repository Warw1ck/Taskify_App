from django.urls import path, include
from rest_framework.routers import DefaultRouter
from todos_backend.todos.views import NoteUpdateView, NoteDestroyView, NoteListView, NoteCreateView

urlpatterns = [
    path('', NoteListView.as_view()),
    path('delete/<int:pk>', NoteDestroyView.as_view()),
    path('update/<int:pk>', NoteUpdateView.as_view()),
    path('create/<int:pk>', NoteCreateView.as_view()),

]