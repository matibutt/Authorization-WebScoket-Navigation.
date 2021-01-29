import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';



@Injectable({
  providedIn: 'root'
})
export class ChatWSService {

  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect('http://localhost:8080');
   }

   listen(eventname: string) : Observable<any> {
    return new Observable((subscriber) => {
        this.socket.on(eventname, (data) => {
            subscriber.next(data);
        });
    });
}

emit(eventname: string, data: any) {
    this.socket.emit(eventname, data);
}
}
