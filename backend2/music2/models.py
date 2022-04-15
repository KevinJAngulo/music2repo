from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(primary_key=True, max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username


class Artist(models.Model):
    id = models.AutoField(primary_key=True)
    song = models.CharField( max_length=100)
    artist = models.CharField(max_length=100)

    def __str__(self):
        return self.artist + " -  " + self.song


class Rating(models.Model):

    id = models.AutoField(primary_key=True)
    username = models.CharField( max_length=100)
    song = models.CharField( max_length=100)
    rating = models.IntegerField()


    def __str__(self):
        return self.song
