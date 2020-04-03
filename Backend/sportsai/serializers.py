from rest_framework import serializers
from .models import Person


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'FirstName',
            'LastName',
        )
        model = Person