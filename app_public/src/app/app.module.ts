import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, AuthenticationService,
    AuthguardService, BadmintimeDataService],
  bootstrap: [FrameworkComponent]
})
export class AppModule {
}
