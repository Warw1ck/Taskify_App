from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.


class UserProfileModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    gender = models.CharField(max_length=10, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')])
    date_of_birth = models.DateField(null=True, blank=True)
    profile_picture = models.URLField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"