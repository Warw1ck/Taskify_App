from rest_framework import serializers

from todos_backend.user_profile.models import UserProfileModel
from todos_backend.user_profile.serializer import UserProfileSerializer

from django.contrib.auth import get_user_model

User = get_user_model()

# Example usage
users = User.objects.all()


class UserSerializer(serializers.ModelSerializer):
    userprofile = UserProfileSerializer(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['email', 'password', 'userprofile']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('userprofile')
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        UserProfileModel.objects.create(user=user, **profile_data)
        return user
