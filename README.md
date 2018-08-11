# FDU Project: BadminTime

- BadminTime: The right place to enjoy badminton at your free time!
- This application is deployed on Heroku: link [here](https://fathomless-fortress-10633.herokuapp.com/).
- To Yuan:
   - create separate branches for individual work
   - when there is a need to merge to master branch, make pull request and assign to each other
   - You can run `ng serve` at `/app_public` to see current progress, port is
   `http://localhost:4200`.
   - To see the progress on main directory, you need to first run `ng build -prod -op build
` at `/app_public`, then `nodemon` or `npm start` at main directory, port is `http://localhost:3000`.
   - ...

 - To Jeffrey:
   - refer to ```badmintime-data.service.ts``` for calling api from angular
   - refer to ```event-list``` component for binding form data to object attributes and calling ```addEvent``` in data service.
   - There are code blocks in ```badmintime-data.service.ts```, ```event-list``` and ```app_api/controllers/events.js``` for trouble shooting that are commented. Feel free to use them...
   - In ```userSchema``` I temperarily commented ```required: true``` for password for the ease of tesing since there's no blank for password in the create event form on front end for now.
   Thanks!!!

## Iteration 2.0
### Angular:
* Added create-event form in events component and signup form in event-details component.
* Enabled change of visibility of these forms by clicking corresponding buttons.
* Moved hard-coded data in event list into event-list.component.ts and enabled binding between fake data and html.

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

![iter1](/app_log_images/iter1-home.png)
![iter1](/app_log_images/iter1-explore.png)
![iter1](/app_log_images/iter1-eventdetail.png)
![iter1](/app_log_images/iter1-login.png)
![iter1](/app_log_images/iter1-register.png)
