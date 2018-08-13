import {Component, OnInit, Input} from '@angular/core';
import {BadmintimeDataService} from '../badmintime-data.service';
import { AuthenticationService } from '../authentication.service';
import {Event, EventPost} from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [BadmintimeDataService]
})
export class EventListComponent implements OnInit {

  @Input() event: Event;

  constructor(private badmintimeDataService: BadmintimeDataService,
              public auth: AuthenticationService) {
  }

  public createFormVisible: boolean = false;


  events: Event[];

  formError: string;

  public newEvent: Event = {
    _id: '',
    organizer: '',
    participants: [''],
    eventDate: '',
    address: '',
    intro: ''
  };

  public eventToPost: EventPost = {
    eventDate: '',
    address: '',
    intro: ''
  };

  private renderEventToPost(newEvent: Event): EventPost {
    this.eventToPost.eventDate = newEvent.eventDate;
    this.eventToPost.address = newEvent.address;
    this.eventToPost.intro = newEvent.intro;
    return this.eventToPost;
  }

  private resetAndHideCreateForm(): void {
    this.createFormVisible = false;
    this.newEvent._id = '';
    this.newEvent.organizer = '';
    this.newEvent.participants = [''];
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
      this.formError = 'Please fill in all the required fields.';
    }
  }

  /* validating front end object content */
  private formIsValid(): boolean {
    return !!(this.newEvent.eventDate && this.newEvent.address);
  }

  ngOnInit() {
    this.getEventList();
  }

}
