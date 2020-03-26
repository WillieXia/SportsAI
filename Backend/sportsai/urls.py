from django.urls import path

from . import views

urlpatterns = [
    path('', views.FirstName.as_view()),
    path('<int:pk>/', LastName..as_view()),
]