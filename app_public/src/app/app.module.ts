import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {FrameworkComponent} from './framework/framework.component';
import {LoginComponent} from './login/login.component';
import {EventListComponent} from './event-list/event-list.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {HeaderComponent} from './header/header.component';
import {EventsPageComponent} from './events-page/events-page.component';
import {RegisterComponent} from './register/register.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {MyEventsPageComponent} from './my-events-page/my-events-page.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthenticationService} from "./authentication.service";
import {AuthguardService} from "./authguard.service";
import {BadmintimeDataService} from "./badmintime-data.service";
import { MapComponent } from './map/map.component';


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
    RegisterPageComponent,
    MyEventsPageComponent,
    MyEventsComponent,
    ProfileComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtQfWd7o7LF4VAFDNYTGCNU3n-zJhFGhU',
      libraries: ["places"]
    })
  ],
  providers: [HttpClientModule, AuthenticationService,
    AuthguardService, BadmintimeDataService],
  bootstrap: [FrameworkComponent]
})
export class AppModule {
}
