# urls.py
from django.urls import path
from todos_backend.user_profile.views import UserProfileView

urlpatterns = [
    path('', UserProfileView.as_view(), name='user_profile'),
]