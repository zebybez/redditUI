import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../../services/message/message.service';

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
      this.router.navigate(['/r/all']);
    } else {
      this.messageService.add(`invalid login attempt`);
    }

  }
}
