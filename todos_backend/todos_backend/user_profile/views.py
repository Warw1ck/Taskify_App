from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from todos_backend.authentication.serializer import UserSerializer
from todos_backend.user_profile.models import UserProfileModel
from todos_backend.user_profile.serializer import UserProfileSerializer


class UserProfileView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        user = self.request.user
        user_profile = get_object_or_404(UserProfileModel, user=user)

        # Serialize the user profile using UserProfileSerializer
        serialized_profile = UserProfileSerializer(user_profile).data

        return serialized_profile


class UserProfileUpdateView(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        user_profile = get_object_or_404(UserProfileModel, user=self.request.user)

        return user_profile

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)

        print("Serializer data:", request.data)

        serializer.is_valid(raise_exception=True)

        print("Serializer validated data:", serializer.validated_data)

        self.perform_update(serializer)
        return Response(serializer.data)




class UserDeleteView(generics.DestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


