# urls.py
from django.urls import path
from todos_backend.user_profile.views import UserProfileView, UserProfileUpdateView, UserDeleteView

urlpatterns = [
    path('', UserProfileView.as_view(), name='user_profile'),
    path('delete', UserDeleteView.as_view(), name='user_profile_delete'),
    path('update', UserProfileUpdateView.as_view(), name='user_profile_update'),

]