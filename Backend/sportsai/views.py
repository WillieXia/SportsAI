from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Person
from .serializers import PersonSerializer

class ListPerson(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer

@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def ListPersontest(request):
    if request.method == 'GET':
        data = Person.objects.all()
        serializer = PersonSerializer(data,context={'request': request} )


    elif request.method == 'POST':
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class DetailPerson(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer