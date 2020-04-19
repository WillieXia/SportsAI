from django.contrib import admin

from .models import *

admin.site.register(Person)

admin.site.register(Exercise)

admin.site.register(RoutineExercise)

admin.site.register(LogEntry)

# Register your models here.
