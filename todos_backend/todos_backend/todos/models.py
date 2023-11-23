from django.core.validators import MinLengthValidator
from django.db import models
from django.conf import settings
# Create your models here.


class NoteModel(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='notes')
    task_name = models.CharField(max_length=16, validators=[MinLengthValidator(2)])
    status = models.BooleanField(default=False)
    creation_date = models.DateField(auto_now_add=True)

