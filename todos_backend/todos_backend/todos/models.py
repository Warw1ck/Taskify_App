from django.core.validators import MinLengthValidator
from django.db import models
# Create your models here.


class NoteModel(models.Model):
    task_name = models.CharField(max_length=16, validators=[MinLengthValidator(2)])
    status = models.BooleanField(default=False)
    creation_date = models.DateField(auto_now_add=True)

