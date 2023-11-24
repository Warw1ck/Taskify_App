from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from todos_backend.authentication.views import MyTokenObtainPairView, UserRegistrationView

urlpatterns = [

    path('register/', UserRegistrationView.as_view(), name='user_registration'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]