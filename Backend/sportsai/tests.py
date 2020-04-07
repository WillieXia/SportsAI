from django.test import TestCase

# Create your tests here.
from django.test import TestCase
from .models import *


class PersonModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Person.objects.create(title='first todo')
        Person.objects.create(description='a description here')

    def test_title_content(self):
        todo = Todo.objects.get(id=1)
        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'first todo')

    def test_description_content(self):
        todo = Todo.objects.get(id=2)
        expected_object_name = f'{todo.description}'
        self.assertEquals(expected_object_name, 'a description here')