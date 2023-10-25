from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', include('todos_backend.authentication.urls')),
    path('api/todos/', include('todos_backend.todos.urls')),

]
