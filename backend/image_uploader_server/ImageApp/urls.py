from django.urls import path
from . import views

urlpatterns = [
    path('images/', views.CreateImage.as_view(), name="add")
]
