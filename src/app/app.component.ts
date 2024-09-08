import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from './login/login.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, SignupComponent ,LoginComponent ,BestSellersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gotech';
}
