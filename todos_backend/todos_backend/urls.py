from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('todos_backend.authentication.urls')),
    path('api/todos/', include('todos_backend.todos.urls')),
    path('api/profile/', include('todos_backend.user_profile.urls')),

]
