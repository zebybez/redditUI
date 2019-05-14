import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../services/message/message.service';
import * as jwt_decode from 'jwt-decode';
import {JwtObject} from '../../domain/jwt-object';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  submitted: boolean;
  testUsername: string;

  constructor(private authService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.testUsername = this.email;
    this.submitted = true;
    this.messageService.add('entered credentials');
    this.authService.login(this.email, this.password).subscribe(jwt => this.checkLogin(jwt));
  }

  checkLogin(x: string): void {
    if (x !== '') {
      localStorage.setItem('token', x);
      const decoded = jwt_decode(x) as JwtObject;
      const obj = JSON.stringify(decoded);
      // The client server convention is to send the important credentials in jwt inside a payload object
      // payload does exit on decoded, angular just does not know it.
      localStorage.setItem('username', decoded.payload.name);
      localStorage.setItem('role', decoded.payload.roleName);
      this.router.navigate(['/r/all']);
    } else {
      this.messageService.add(`invalid login attempt`);
    }

  }
}
