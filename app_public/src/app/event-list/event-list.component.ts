import {Component, OnInit, Input} from '@angular/core';
import {BadmintimeDataService} from '../badmintime-data.service';

import {Event, EventPost} from '../event';
import {User} from '../user';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [BadmintimeDataService]
})
export class EventListComponent implements OnInit {

  @Input() event: Event;

  constructor(private badmintimeDataService: BadmintimeDataService) {
  }

  public createFormVisible: boolean = false;

  

  events: Event[];

  formError: string;

  public newEvent: Event = {
    _id: '',
    organizer: {
      email: '',
      userName: ''
    },
    participants: [{
      email: '',
      userName: ''
    }],
    eventDate: '',
    address: '',
    intro: ''
  };

  public eventToPost: EventPost = {
    _id: '',
    email: '',
    userName: '',
    eventDate: '',
    address: '',
    intro: ''
  };

  private renderEventToPost(newEvent: Event): EventPost {
    this.eventToPost._id = newEvent._id;
    this.eventToPost.address = newEvent.address;
    this.eventToPost.userName = newEvent.organizer.userName;
    this.eventToPost.email = newEvent.organizer.email;
    this.eventToPost.eventDate = newEvent.eventDate;
    this.eventToPost.intro = newEvent.intro;
    return this.eventToPost;
  }

  private resetAndHideCreateForm(): void {
    this.createFormVisible = false;
    this.newEvent._id = '';
    this.newEvent.organizer = {
      email: '',
      userName: ''
    };
    this.newEvent.participants = [{
      email: '',
      userName: ''
    }];
    this.newEvent.eventDate = '';
    this.newEvent.address = '';
    this.newEvent.intro = '';
  }

  private getEventList(): void {
    this.badmintimeDataService
      .getEventList()
      .then(foundEvents => {
        this.events = foundEvents;
      });
  }

  public onEventSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {

      this.badmintimeDataService.addEvent(this.renderEventToPost(this.newEvent))
        .then((event: Event) => {
          console.log('Event saved', event);
          this.events.unshift(event);
          this.resetAndHideCreateForm();
        })

    } else {
      this.formError = 'Please fill in all the fields.';
    }
  }

  /* validating front end object content */
  private formIsValid(): boolean {

    if (this.newEvent.organizer && this.newEvent.eventDate && this.newEvent.address) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.getEventList();
  }

}
