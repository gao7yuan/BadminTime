import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { EventsPageComponent } from '../events-page/events-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { MyEventsPageComponent } from '../my-events-page/my-events-page.component';
import {ProfileComponent} from "../profile/profile.component";
import {AuthguardService} from "../authguard.service";

const routes : Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'my-events',
    component: MyEventsPageComponent
  },
  {
    path: 'events',
    component: EventsPageComponent
  },
  {
    path: 'events/:eventId',
    component: DetailsPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
