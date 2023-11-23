from rest_framework import serializers
from todos_backend.user_profile.models import UserProfileModel


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfileModel
        fields = '__all__'

