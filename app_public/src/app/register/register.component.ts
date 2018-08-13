import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';
import {TokenPayload} from '../user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
  };

  checkPassword: '';

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  register() {
    if (this.credentials.name === ''
      || this.credentials.name === '' || this.credentials.password === '') {
      console.error("please fill in all forms");
    } else if (this.credentials.password !== this.checkPassword) {
      console.error("password not the same, check again");
    } else {
      this.auth.register(this.credentials).subscribe(() => {
        // register successful, redirect to login page
        this.router.navigateByUrl('login');
      }, (err) => {
        console.error(err);
      });
    }
  }

  ngOnInit() {
  }

}
