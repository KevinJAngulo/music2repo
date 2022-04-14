from rest_framework import serializers
from .models import User, Artist, Rating

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    # The id is automatically created as a primary key by our Django model
    # and we can included it here as well.
    fields = ('username', 'password')

class ArtistSerializer(serializers.ModelSerializer):
  class Meta:
    model = Artist
    # The id is automatically created as a primary key by our Django model
    # and we can included it here as well.
    fields = ('id','artist', 'song')

class RatingSerializer(serializers.ModelSerializer):
  class Meta:
    model = Rating
    # The id is automatically created as a primary key by our Django model
    # and we can included it here as well.
    fields = ('username', 'song', 'rating')
