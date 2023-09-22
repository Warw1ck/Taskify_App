from django.contrib import admin

# Register your models here.
from todos_backend.todos.models import NoteModel


class NoteAdminModel(admin.ModelAdmin):
    list_display = ('task_name', 'status')
    search_fields = ('task_name',)


admin.site.register(NoteModel, NoteAdminModel)
