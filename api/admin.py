from django.contrib import admin

# Register your models here.
from .models import Student, Deck, Flashcard

admin.site.register(Student)
admin.site.register(Deck)
admin.site.register(Flashcard)