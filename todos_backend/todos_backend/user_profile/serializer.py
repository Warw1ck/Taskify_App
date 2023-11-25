# authentication/serializers.py
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import UserProfileModel

User = get_user_model()
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileModel
        fields = ['first_name', 'last_name', 'gender', 'date_of_birth', 'profile_picture']

