from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from .models import Person
from .serializers import PersonSerializer


class FirstPerson(generics.ListCreateAPIView):
    queryset = Person.FirstName
    serializer_class = PersonSerializer


class LastPerson(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.LastName
    serializer_class = PersonSerializer