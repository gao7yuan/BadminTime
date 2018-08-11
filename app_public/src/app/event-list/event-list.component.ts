import { Component, OnInit, Input } from '@angular/core';
import { BadmintimeDataService } from '../badmintime-data.service';

import { Event } from '../event';
import { User } from '../user';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [BadmintimeDataService]
})
export class EventListComponent implements OnInit {

  @Input() event: Event;

  constructor(private badmintimeDataService: BadmintimeDataService) { }

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
    eventTime: '',
    address: '',
    intro: ''
  };

  private resetAndHideCreateForm() : void {
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
    this.newEvent.eventTime = '';
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

  // this potentially has problem:
  public onEventSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log("from event-list component", this.newEvent);

      // uncomment following line and comment the block below for debugging
      // this.badmintimeDataService.addEvent(this.newEvent)
      
      // comment the following block for debugging
      this.badmintimeDataService.addEvent(this.newEvent)
      .then((event: Event) => {
        console.log('Event saved', event);
        this.events.unshift(event);
        this.resetAndHideCreateForm;
      })
      
    } else {
      this.formError = 'Please fill in all the fields.';
    }
  }
/* validating front end object content */
  private formIsValid(): boolean {
    
    if (this.newEvent.organizer && this.newEvent.eventTime && this.newEvent.address) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.getEventList();
  }

}
