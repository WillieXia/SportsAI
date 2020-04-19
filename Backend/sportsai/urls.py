from django.urls import path

from . import views

urlpatterns = [
    path('People', views.ListPerson.as_view()),
    path('People/<int:pk>/', views.DetailPerson.as_view()),
]