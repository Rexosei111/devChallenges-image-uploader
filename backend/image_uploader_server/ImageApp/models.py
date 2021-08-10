from django.db import models
from django.core.validators import FileExtensionValidator

# Create your models here.
class Images(models.Model):
    image = models.FileField(upload_to="uploads")

