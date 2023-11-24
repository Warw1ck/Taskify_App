from rest_framework import serializers
from todos_backend.user_profile.models import UserProfileModel


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfileModel
        fields = ['first_name', 'last_name', 'date_of_birth', 'gender']

