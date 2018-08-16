# FDU Project: BadminTime

- BadminTime: The right place to enjoy badminton at your free time!
- This application is deployed on Heroku: link [here](https://badmintime.herokuapp.com/).

## Links to each iteration
- [Introduction](#introduction)
- [App Details](#application-details)
- [Iteration 3.0](#iteration-3.0)
- [Iteration 2.0](#iteration-2.0)
- [Iteration 1.0](#iteration-1.0)

## Introduction
Jeffrey and Yuan are both badminton lovers. They play badminton every Wednesday with several friends together near Mukilteo, WA. Sometimes they find it difficult to find out who is participating the coming event from messages in the group chat, since their friends might fail to see the message, not reply in time, or that the group chat is flooded with other unrelated chitchats.

For this project, they are trying to build a website to help people create and sign up for events. In this way, they believe people can hold an event in a more efficient way.

* create an event
  - As an event organizer
  - so that I can set time, place for this event, and publish with a short introduction
  - I want to start an event

* attend an event
  - As an event participant
  - so that I can provide my name and contact information to the organizer who can getting to know me
  - I want to sign up for an event

* modify or delete an event
  - As an event organizer
  - so that I can update or delete event information in case of any change
  - I want to modify or delete an event

## Application Details  
* Home page of the website. If not logged in, you are able to browse existing events via ```Explore``` tag on navigation bar.
![final](/app_log_images/final/home_out.png)
* In the ```Explore``` tag you can view the existing events. If you are logged out and you click ```New Event``` button, an error message will appear:
![final](/app_log_images/final/event_list.png)
![final](/app_log_images/final/event_list_out.png)
* If you click the title of one event, you can see the event detail:
![final](/app_log_images/final/event_detail_other.png)
* You can search the event location on google map:
![final](/app_log_images/final/googlemap.png)
* If you are viewing an event created by others and you are logged in, you should be able to sign up for it. (You can also quit it afyer signing up.) However, you won't be able to sign up for an event if you are logged out:
![final](/app_log_images/final/event_detail_out.png)
* You can login or register:
![final](/app_log_images/final/login.png)
![final](/app_log_images/final/register.png)
* After logging in, you will see a different navigation bar, with ```My Events``` where you can view the events that you are going to participate, and a tag with your username which will direct you to your profile:
![final](/app_log_images/final/home_loggedin.png)
![final](/app_log_images/final/my_events.png)
![final](/app_log_images/final/profile.png)
* You will now be able to create a new event:
![final](/app_log_images/final/new_event_loggedin.png)
* If you view the event that you created, you will be able to edti it, delete it, or go back to the previous page:
![final](/app_log_images/final/event_detail_my.png)
![final](/app_log_images/final/edit_event.png)

## Iteration 3.0
* Enabled Angular to talk to database API in Express to execute GET, PUT, POST, DELETE methods.
* Improved login feature in Express and made Angular talk to the api in Express.
* Added third-party element: Angular google map & Google Maps JavaScript API to enable google map in events with autocomplete search box.
* Updated UI.

## Iteration 2.0
### Angular:
* Added create-event form in events component and signup form in event-details component.
* Enabled change of visibility of these forms by clicking corresponding buttons.
* Moved hard-coded data in event list into event-list.component.ts and enabled binding between fake data and html.

### Express:
* Add authentication (register, login) to API
* Fix API bugs

![iter2](/app_log_images/iter2-neweventbtn.png)
![iter2](/app_log_images/iter2-createeventform.png)
![iter2](/app_log_images/iter2-signupform.png)

## Iteration 1.0
### Angular:
* Created necessary Angular components
* Built static webpages.
* Enabled basic routing.
* Next:
  - fix collapse nav problem.
  - make create event form and sign up form
  - enable talking to API.

### Express:
* Initiated Express and Angular projects
* Finished first draft of the API, including the following parts:
  - set up basic logics for models, routes and controllers
  - used schema to model the data, push database live on mlab
  - defined and organized routes in Express
  - finished methods in the controllers, handling potential requests and sending responses
* Took appreciation of Yuan's front-end work  

![iter1](/app_log_images/iter1-home.png)
![iter1](/app_log_images/iter1-explore.png)
![iter1](/app_log_images/iter1-eventdetail.png)
![iter1](/app_log_images/iter1-login.png)
![iter1](/app_log_images/iter1-register.png)
