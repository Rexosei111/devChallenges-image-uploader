from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Images

class ImagesSerializer(ModelSerializer):
    class Meta:
        model = Images
        fields = ['image']