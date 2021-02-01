import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../../UniWork/uniWork/src/app/services/events.service';
import { Router } from '@angular/router';
import { UserRegisterService } from '../../../../UniWork/uniWork/src/app/services/user-register.service';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component implements OnInit {

  eventList: any;
  userList: any;
  username: string = '';
  msgTrue = false;
  constructor(private userService: UserRegisterService, private router: Router, private eventService: EventsService  ){

    this.userService.getUserName().subscribe(data => this.username = data.toString(), err => this.router.navigateByUrl('login2'));
    // this.userService.login()
    // .subscribe(
    //   data => {console.log(data); localStorage.setItem('token', data.toString()); this.router.navigate(['/admin']); },
    //   error => {}
    //   );
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
