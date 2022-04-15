# music2repo

# Bella Kellner, Kevin Angulo Lezama, & Valery Corral

# We all collaborated on various parts of the assignment. We each tackled different aspects of Part 1,
# and collaborated accordingly for covering different aspects for Part 2.

#Instructions for our Music Rate App

#Backend:
 1. After downloading the zip file, within the terminal go to its respective directory:music2repo.
      * If you have not done so already, you will need to install `pip3 install djangorestframework django-cors-headers`

 2. Then, enter `source django-react2/bin/activate` into the terminal.

 3. `cd backend2`

 4. `python3 manage.py runserver`

 From there, the backend should be running. You can go to http://127.0.0.1:8000/api/Artists/ to see the
 REST framework for artists or http://127.0.0.1:8000/api/Ratings/ to see the REST framework for ratings.

#Frontend:

1. In the music2repo directory, `cd frontend4`.

    * If you have not done so already, you will need to install `brew install node` as well as
      `npm add bootstrap reactstrap`
    * Add the axios, `npm add axios`    

2. `npm start`

3. If there is an error about scripts, enter `npm i react-scripts`.

4. The frontend should then be running to where our App is.

#app

The App interface will have a sign in button, create song button, and a music play/pause button.
Hit the play/pause button to hear music selective music.
Sign-in to enter a username and password. Then you can add a song with a respective artist and song
name. If a user wants to add a song that has already been added then they will be notified that they
can not create this new song. Users have the option to edit the song name and artist as well as delete
a respective song. When deleting a song, the user will be notified with an alert that the delete was
processed. The user will also have the option to rate a respective song. The user can only rate a song once. The average ratings are then displayed. There is a search feature. To use this feature, a user has to enter a letter in the search bar and then delete it so that the song will pop up. There is also a style component that is used with a nav bar to provide links to the group members' respective landing page, to allow for a more enhancing user experience.
