import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../event";
import {AuthenticationService} from '../authentication.service';
import {BadmintimeDataService} from '../badmintime-data.service';


@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {

  @Input() event: Event;

  myEvents: Event[];

  constructor(private auth: AuthenticationService,
              private badmintimeDataService: BadmintimeDataService) {
    // this.getMyEvents=this.getMyEvents.bind(this);
  }

  private getEventList(): void {
    this.badmintimeDataService
      .getEventList()
      .then(foundEvents => {
        this.myEvents = this.getMyEvents(this.auth, foundEvents);
      });
  }

  private getMyEvents(auth: AuthenticationService, foundEvents: Event[]): Event[] {
    return foundEvents.filter(function (event, index) {
      return (event.participants.includes(auth.getUserDetails().name));
    });
  }


  ngOnInit() {
    this.getEventList();
  }

}
