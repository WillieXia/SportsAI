from django.urls import path

from . import views

urlpatterns = [
    path('', views.FirstPerson.as_view()),
    path('', views.LastPerson.as_view()),
]