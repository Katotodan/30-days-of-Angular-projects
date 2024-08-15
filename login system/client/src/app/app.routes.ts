import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path:"login", component: LoginComponent},
    {path:"signup", component: SingupComponent}
];
