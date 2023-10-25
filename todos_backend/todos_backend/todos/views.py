from rest_framework import serializers, generics, viewsets
from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated

from todos_backend.todos.models import NoteModel


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteModel
        fields = "__all__"

class NoteListView(generics.ListAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        # Access the currently authenticated user
        user = self.request.user

        # Use the user to filter the queryset if needed
        queryset = user.notes.all()

        return queryset

class NoteDestroyView(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Access the currently authenticated user
        user = self.request.user

        # Use the user to filter the queryset if needed
        queryset = user.notes.all()

        return queryset

class NoteUpdateView(generics.UpdateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Access the currently authenticated user
        user = self.request.user

        # Use the user to filter the queryset if needed
        queryset = user.notes.all()

        return queryset


class NoteCreateView(generics.CreateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Access the currently authenticated user
        user = self.request.user

        # Use the user to filter the queryset if needed
        queryset = user.notes.all()

        return queryset

