import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  hostName: string = '';
  routeName: string = '';
  userImage: string = '';
  constructor(private _HttpClient: HttpClient, private _GlobalService: GlobalService , private _AuthService:AuthService) {
    this.hostName = this._GlobalService.hostName;
    this.routeName = this._GlobalService.userRoute;
    this.userImage = this._AuthService.userPhoto;
  }

  getUser(): Observable<any> {
    return this._HttpClient.get(`${this.hostName}${this.routeName}/me`, { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
  }

  updateUser(formData: any): Observable<any> {
    return this._HttpClient.put(`${this.hostName}${this.routeName}/updateMe`, formData, { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
  }

  changePassword(formData: any): Observable<any> {
    return this._HttpClient.put(`${this.hostName}${this.routeName}/changeMyPassword`, formData, { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } })
  }
}