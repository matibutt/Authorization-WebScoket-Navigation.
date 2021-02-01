import { EventsService } from './../services/events.service';
import { UserRegisterService } from './../services/user-register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  eventList: any;
  userList: any;
  username: string = '';
  msgTrue = false;
  constructor(private userService: UserRegisterService, private router: Router, private eventService: EventsService  ){

    this.userService.getUserName().subscribe(data => this.username = data.toString(), err => this.router.navigateByUrl('login2'));
  }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe(data => {
      this.eventList = data;
      this.refreshEventList();
    });
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    });
    this.refreshUserList();
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login2');
  }
  refreshEventList(){
    this.eventService.getEvent().subscribe(data => {
      this.eventList = data;
    });
  }

  onDeleteEvent(id: string){
      this.eventService.deleteEvent(id).subscribe((res) => {
        this.msgTrue = true;
        this.refreshEventList();
      });
  }

  onDeleteUser(id: string){
    this. userService.deleteUser(id).subscribe((res) => {
      this.msgTrue = true;
      this.refreshUserList();
    });
}
refreshUserList(){
  this.userService.getUsers().subscribe(data => {
    this.userList = data;
  });
}

}
