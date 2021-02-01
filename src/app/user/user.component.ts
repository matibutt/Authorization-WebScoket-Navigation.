import { EventsService } from './../services/events.service';
import { Router } from '@angular/router';
import { UserRegisterService } from './../services/user-register.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  eventList: any;
  username: string = '';

  constructor(private userService: UserRegisterService, private router: Router, private eventService: EventsService  ){
    this.userService.getUserName().subscribe(data => this.username = data.toString(), err => this.router.navigateByUrl('login2'));
   }
   addName(data){
     this.username = data.username;
   }
  ngOnInit(): void {
    this.eventService.getEvent().subscribe(data => {
      this.eventList = data;
    });
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('International');
  }

}
