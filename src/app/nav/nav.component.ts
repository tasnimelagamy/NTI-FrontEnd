import { Component } from '@angular/core';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {
    // if (_AuthService.currentUser !== null) { this.isLogin = true }
    // else { this.isLogin = false }
    _AuthService.currentUser.subscribe(() => {
      if (_AuthService.currentUser.getValue() !== null) { this.isLogin = true }
      else { this.isLogin = false }
    })
  }
  logout() {
    this._AuthService.logout();
    this._Router.navigate(['/login'])
  }
}
