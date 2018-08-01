import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { LoginComponent } from './login/login.component';
import { EventListComponent } from './event-list/event-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { HeaderComponent } from './header/header.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { RegisterComponent } from './register/register.component';
import { RegisterPageComponent } from './register-page/register-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    LoginComponent,
    EventListComponent,
    HomepageComponent,
    LoginPageComponent,
    DetailsPageComponent,
    EventDetailsComponent,
    HeaderComponent,
    EventsPageComponent,
    RegisterComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
