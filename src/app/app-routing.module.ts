import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
 
  {
    path: 'dashboard',
    component: DashboardComponent
  },
 
  {
    path: 'users',
    component: UsersComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  // {
  //   path: 'account',
  //   component: AccountInfoComponent
  // },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
