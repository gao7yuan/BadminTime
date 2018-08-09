import { Component, OnInit } from '@angular/core';
import { BadmintimeDataService } from '../badmintime-data.service';

import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [BadmintimeDataService]
})
export class EventListComponent implements OnInit {

  constructor(private badmintimeDataService: BadmintimeDataService) { }

  public createFormVisible: boolean = false;

  events: Event[] = [
    {
      _id: "1111",
      organizer: {
        _id: "2222",
        email: "meow@gmail.com",
        password: "123456",
        username: "Yuan"
      },
      participants: [{
        _id: "2222",
        email: "meow@gmail.com",
        password: "123456",
        username: "Yuan"
      }],
      eventDate: new Date(2018, 7, 18),
      address: "Harbour Pointe",
      intro: "none"
    },
    {
      _id: "3333",
      organizer: {
        _id: "4444",
        email: "shroud@gmail.com",
        password: "666",
        username: "shroud"
      },
      participants: [{
        _id: "4444",
        email: "shroud@gmail.com",
        password: "666",
        username: "shroud"
      }],
      eventDate: new Date(2018, 7, 20),
      address: "SBC",
      intro: "welcome"
    }
  ]

  formError: string;

  public newEvent: Event = {
    _id: '',
    organizer: undefined,
    participants: undefined,
    eventDate: undefined,
    address: '',
    intro: ''
  };

  private resetAndHideCreateForm() : void {
    this.createFormVisible = false;
    this.newEvent._id = '';
    this.newEvent.organizer = undefined;
    this.newEvent.participants = undefined;
    this.newEvent.eventDate = undefined;
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
      console.log(this.newEvent);
      this.badmintimeDataService.addEvent(this.newEvent)
      .then((event: Event) => {
        console.log('Event saved', event);
        this.events.unshift(event);
        this.resetAndHideCreateForm;
      })
    } else {
      this.formError = 'All fields required, please try again';
    }
  }

  private formIsValid(): boolean {
    if (this.newEvent.organizer && this.newEvent.eventDate&& this.newEvent.address && this.newEvent.intro) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    //this.getEventList();
  }

}
