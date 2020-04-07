from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListPerson.as_view()),
    path('<int:pk>/', views.DetailPerson.as_view()),
]