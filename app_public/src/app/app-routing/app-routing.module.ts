import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { EventListComponent } from '../event-list/event-list.component';
import { EventsPageComponent } from '../events-page/events-page.component';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { CreateEventPageComponent } from '../create-event-page/create-event-page.component';
import { MyEventsPageComponent } from '../my-events-page/my-events-page.component';

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
    path: 'create-event',
    component: CreateEventPageComponent
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
