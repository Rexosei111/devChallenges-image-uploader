from django.shortcuts import render
from .serializers import ImagesSerializer
from .models import Images
from rest_framework.generics import CreateAPIView

class CreateImage(CreateAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer