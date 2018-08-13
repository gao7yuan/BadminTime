import { Component, OnInit, Input } from '@angular/core';

import { Event, EventPost } from "../event";
import { BadmintimeDataService } from "../badmintime-data.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [BadmintimeDataService]
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event;

  constructor(private badmintimeDataService: BadmintimeDataService) { }

  public signupFormVisible: boolean = false;

  public editFormVisible: boolean = false;

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
    this.eventToPost.address = newEvent.address;
    this.eventToPost.eventDate = newEvent.eventDate;
    this.eventToPost.intro = newEvent.intro;
    return this.eventToPost;
  }

  private resetAndHideEditForm(): void {
    this.editFormVisible = false;
    this.newEvent._id = '';
    this.newEvent.organizer = '';
    this.newEvent.participants = [''];
    this.newEvent.eventDate = '';
    this.newEvent.address = '';
    this.newEvent.intro = '';
  }

  public onEditSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {

      // this code will need to be changed later after introducing login feature
      this.badmintimeDataService.modifyEvent(this.renderEventToPost(this.newEvent), this.event._id)
        .then((event: Event) => {
          console.log('Event updated', event);
          this.resetAndHideEditForm();
        })

    } else {
      this.formError = 'Please fill in all the fields.';
    }
  }

  public onDelete(): void {

  }

    /* validating front end object content */
    private formIsValid(): boolean {

      if (this.newEvent.eventDate && this.newEvent.address) {
        return true;
      } else {
        return false;
      }
    }

  ngOnInit() {
  }

}
