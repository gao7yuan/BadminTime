import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {TokenPayload} from '../user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  error: string;

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      // login successful, redirect to homepage
      this.router.navigateByUrl('/');
    }, (err) => {
      this.error = "Login error! Please try again";
    });
  }

  ngOnInit() {
  }

}
