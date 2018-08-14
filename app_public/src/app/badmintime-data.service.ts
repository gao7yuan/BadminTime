import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {AuthenticationService} from "./authentication.service";
import {Event, EventPost} from './event';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BadmintimeDataService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  //private apiBaseUrl = 'http://localhost:3000/api';
  private apiBaseUrl = 'https:loc8r-yuangao.herokuapp.com/api';

  public getEventList(): Promise<Event[]> {
    const url: string = `${this.apiBaseUrl}/events`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Event[])
      .catch(this.handleError);
  }

  public getEvent(eventId: string): Promise<Event> {
    const url: string = `${this.apiBaseUrl}/events/${eventId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Event)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

  public addEvent(formData: EventPost): Promise<Event> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
    const url: string = `${this.apiBaseUrl}/events`;
    return this.http
      .post(url, formData, options)
      .toPromise()
      .then(response => response as Event)
      .catch(this.handleError);
  }

  // have problems: cant call put

  public modifyEvent(formData: EventPost, eventId: string): Promise<Event> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
    const url: string = `${this.apiBaseUrl}/events/${eventId}`;
    return this.http
      .put(url, formData, options)
      .toPromise()
      .then(response => response as Event)
      .catch(this.handleError);
  }

  public deleteEvent(eventId: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
    const url: string = `${this.apiBaseUrl}/events/${eventId}`;
    return this.http
      .delete(url, options)
  }
}
