from django.db import models

# Create your models here.
class Person(models.Model):
    First = models.CharField(max_length=20)
    Last = models.CharField(max_length=20)














#A test model, going to experiment to see how we can add these to a database
class Exercise(models.Model):
    exID = models.IntegerField()
    name = models.CharField(max_length=64)          #Exercise name
    primary = models.CharField(max_length=64)       #Primary muscle group
    secondary = models.CharField(max_length=256)    #Secondary muscle groups

class RoutineExercise(models.Model):
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    #references an exercise from the exercises table
    sets = models.IntegerField()
    reps = models.IntegerField()
    value = models.IntegerField()
    #value represents weight, time, or whatever other metric to measure

class LogEntry(models.Model):
    name = models.CharField(max_length=64)  #name of exercise or routine
    time = models.DateTimeField()               #time the entry was completed
