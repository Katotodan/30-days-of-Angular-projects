import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { logGuard } from './auth.guard';

export const routes: Routes = [
    {path: "", component: HomeComponent, canActivate:[authGuard]},
    {path:"login", component: LoginComponent, canActivate:[logGuard]},
    {path:"signup", component: SingupComponent, canActivate:[logGuard]}
];
