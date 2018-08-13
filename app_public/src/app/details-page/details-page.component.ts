import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import { Event } from '../event';
import { BadmintimeDataService } from '../badmintime-data.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [BadmintimeDataService]
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private badmintimeDataService: BadmintimeDataService,
    private route: ActivatedRoute
  ) { }

  newEvent: Event;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        let id = params.get('eventId');
        return this.badmintimeDataService.getEvent(id);
      }))
        .subscribe((newEvent: Event) => {
          this.newEvent = newEvent;
        });
  }

}
