import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Event, EventPost} from "../event";
import {BadmintimeDataService} from "../badmintime-data.service";
import {AuthenticationService} from '../authentication.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  providers: [BadmintimeDataService]
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event;

  constructor(private badmintimeDataService: BadmintimeDataService,
              public auth: AuthenticationService, private router: Router, private location: Location) {
  }

  public editFormVisible: boolean = false;

  errorMsg: string;

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
    if (this.auth.isLoggedIn()) {
      this.badmintimeDataService.modifyEvent(this.renderEventToPost(this.newEvent), this.event._id)
        .then((event: Event) => {
          this.resetAndHideEditForm();
          this.router.navigateByUrl('events');
        })
        .then(() => {
          this.router.navigateByUrl(`/events/${this.event._id}`);
        })
    } else {
      this.errorMsg = "Please login first!";
    }

  }

  public onDelete(): void {
    this.badmintimeDataService.deleteEvent(this.event._id).subscribe(() => {
      // delete successful, redirect to explore
      this.router.navigateByUrl('events');
    }, (err) => {
      this.errorMsg = "Delete error!";
    })

  }

  public backClicked(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
