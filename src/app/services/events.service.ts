import { Event } from './../class/event.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  selectedEvent: Event;
  event: Event[];

  constructor( private httpClient: HttpClient) { }

  postEvent(body: any){
    return this.httpClient.post('http://localhost:3000/event', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  getEvent(){
    return this.httpClient.get('http://localhost:3000/event');
  }
  deleteEvent(_id: string  ){
    const deleteEndPoint = 'http://localhost:3000/event/' + `${_id}`;
    return this.httpClient.delete(deleteEndPoint);
  }
}
