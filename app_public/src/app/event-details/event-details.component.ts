import { Component, OnInit, Input } from '@angular/core';

import { Event } from "../event";
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

  ngOnInit() {
  }

}
