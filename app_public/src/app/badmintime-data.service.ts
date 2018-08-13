import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./authentication.service";
import {Event, EventPost} from './event';

@Injectable()
export class BadmintimeDataService {

  constructor(private http: Http, private auth: AuthenticationService) { }

  private apiBaseUrl = 'http://localhost:3000/api';
  // private apiBaseUrl = 'https:loc8r-yuangao.herokuapp.com/api';

  public getEventList(): Promise<Event[]> {
    const url: string = `${this.apiBaseUrl}/events`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Event[])
      .catch(this.handleError);
  }

  public getEvent(eventId: string): Promise<Event> {
    const url: string = `${this.apiBaseUrl}/events/${eventId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as Event)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public addEvent(formData: EventPost): Promise<Event> {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${this.auth.getToken()}`);
    const url: string = `${this.apiBaseUrl}/events`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response.json() as Event)
      .catch(this.handleError);
  }

  // have problems: cant call put

  public modifyEvent(formData: EventPost, eventId: string): Promise<Event> {
    const url: string = `${this.apiBaseUrl}/events/${eventId}`;
    console.log("from data service:", formData);
    console.log(url);
    return this.http
      .put(url, formData)
      .toPromise()
      .then(response => response.json() as Event)
      .catch(this.handleError);
  }

  // unfinished

  public deleteEvent(eventId: string): void {

  }
}
