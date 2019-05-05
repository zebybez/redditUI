import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  submitted: boolean;
  testUsername: string;
  constructor(private authService: AuthenticationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  submit(): void {
    this.authService.login().subscribe(x => this.checkLogin(x));
    this.submitted = true;
    this.testUsername = this.username;
  }

  checkLogin(x: string): void {
    if (x !== '') {
      localStorage.setItem('token', x);
      this.router.navigate(['/r/all']);
    } else {
      // todo make messageService and log this shit
    }

  }
}
