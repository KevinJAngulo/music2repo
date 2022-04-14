from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from rest_framework import viewsets # We use a viewset.
from .serializers import UserSerializer, ArtistSerializer, RatingSerializer # Import our serializer file.
from .models import User, Artist, Rating # Import our Todo model.

class UserView(viewsets.ModelViewSet):
  # Create a new TodoSerializer instance.
  serializer_class = UserSerializer
  # Todo.objects.all() retrieves all the Todo objects in the database.
  queryset = User.objects.all()

class ArtistView(viewsets.ModelViewSet):
  # Create a new TodoSerializer instance.
  serializer_class = ArtistSerializer
  # Todo.objects.all() retrieves all the Todo objects in the database.
  queryset = Artist.objects.all()

class RatingView(viewsets.ModelViewSet):
  # Create a new TodoSerializer instance.
  serializer_class = RatingSerializer
  # Todo.objects.all() retrieves all the Todo objects in the database.
  queryset = Rating.objects.all()
