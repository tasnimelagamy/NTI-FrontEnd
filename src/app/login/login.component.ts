import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })
  phoneImage: string = '';

  invalidLogin: string = '';
  emailErrors: string = '';
  passwordErrors: string = '';

  login(formData: FormGroup) {
   this._AuthService.login(formData.value).subscribe((res) => {
      if (res.token) {
        localStorage.setItem('user', res.token)
        this._AuthService.saveCurrentUser()
      }
      this._Router.navigate(['/home'])
    }, (err) => {
      this.invalidLogin = err.error.message
    })
  }

  ngOnInit(): void { this.phoneImage = this._AuthService.authPhoto }

      
  
}