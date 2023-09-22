from rest_framework import serializers, viewsets
from django.http import HttpResponse
from django.shortcuts import render

from todos_backend.todos.models import NoteModel


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteModel
        fields = "__all__"


class NoteViewSet(viewsets.ModelViewSet):
    queryset = NoteModel.objects.all()
    serializer_class = NoteSerializer



def welcome_page(request):
    return HttpResponse("Any kind of HTML Here")
