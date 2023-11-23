from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from todos_backend.user_profile.serializer import UserProfileSerializer


class UserProfileView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        # Assuming you have a UserProfile linked to the user
        return self.request.user.userprofile