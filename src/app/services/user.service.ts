import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  hostName: string = '';
  routeName: string = '';
  userImg: string = '';
  constructor(
    private _HttpClient: HttpClient,
    private _GlobalService: GlobalService
  ) {
    this.hostName = this._GlobalService.hostName;
    this.routeName = this._GlobalService.userRoute;
    this.userImg = this._GlobalService.userImage;
  }

  getAddresses = (): Observable<any> => {
    return this._HttpClient.get(`${this.hostName}${this.routeName}/address`, {
      headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
    });
  };
  getUser(): Observable<any> {
    return this._HttpClient.get(`${this.hostName}${this.routeName}/me`, {
      headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
    });
  }

  updateUser(formData: any): Observable<any> {
    return this._HttpClient.put(
      `${this.hostName}${this.routeName}/updateMe`,
      formData,
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } }
    );
  }

  changePassword(formData: any): Observable<any> {
    return this._HttpClient.put(
      `${this.hostName}${this.routeName}/changeMyPassword`,
      formData,
      { headers: { authorization: `Bearer ${localStorage.getItem('user')}` } }
    );
  }
}