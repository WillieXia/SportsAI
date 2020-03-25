from django.db import models

# Create your models here.
class sportsai(models.Model):
    user = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
        """A string representation of the model."""
        return self.title