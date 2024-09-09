import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products-details/products-details.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    { path: 'products', loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent) },
    { path: 'products/:id', loadComponent: () => import('./products-details/products-details.component').then(m => m.ProductDetailsComponent) },
    { path: 'myReviews', canActivate: [authGuard], loadComponent: () => import('./reviews/reviews.component').then(m => m.ReviewsComponent) },
    { path: 'signup', loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: 'forgetPassword', loadComponent: () => import('./forget-password/forget-password.component').then(m => m.ForgetPasswordComponent) },
    { path: '**', component: NotfoundComponent }

];
