import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private httpService: HttpClient) { }

  register(body: any){
    return this.httpService.post('http://localhost:3000/users/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  login(body: any){
    return this.httpService.post('http://localhost:3000/users/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getUserName() {
    return this.httpService.get('http://localhost:3000/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  getUsers(){
    return this.httpService.get('http://localhost:3000/users');
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  deleteUser(_id: string  ){
    const deleteEndPoint = 'http://localhost:3000/users/' + `${_id}`;
    return this.httpService.delete(deleteEndPoint);
  }


}



