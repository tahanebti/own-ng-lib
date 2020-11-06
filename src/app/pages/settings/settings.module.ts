import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: 'profile', component: UserProfileComponent ,},
      { path: "", redirectTo: "all", pathMatch: "full" },
      {
        path: 'details',
        component: UserProfileComponent
      },
     
    ]
  },
 
];


@NgModule({
  declarations: [
    SettingsComponent,
    UserProfileComponent
  ],
  exports: [
    SettingsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingsModule { }
