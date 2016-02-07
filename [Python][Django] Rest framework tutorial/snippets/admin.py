from django.contrib import admin

from models import Snippet

# Register your models here.
@admin.register(Snippet)
class SnippetAdmin(admin.ModelAdmin):
    fields = ('title', 'code', 'language', 'style', 'owner')
    list_display = ('title', 'owner_name')

    def owner_name(self, obj):
        return obj.owner.username
