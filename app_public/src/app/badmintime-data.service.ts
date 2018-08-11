import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Event } from'./event';

@Injectable()
export class BadmintimeDataService {

  constructor(private http: Http) { }

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

  public addEvent(formData: Event): Promise<Event> {
    const url: string = `${this.apiBaseUrl}/events`;
    console.log("from data service:", formData);
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response.json() as Event)
      .catch(this.handleError);
  }
  // below is code for debugging:
  /*
  public addEvent(formData: Event): void {
    const url: string = `${this.apiBaseUrl}/events`;
    console.log("from data service:", formData);
    this.http
      .post(url, formData);
    console.log("from data service: after post with input", formData);
  }
  */
}
