import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  name: string;
  password: string;
  submitted: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthenticationService) { }

  ngOnInit() {
    this.submitted = false;
  }

  onRegister() {
    this.submitted = true;
    this.authService.register(this.email, this.name, this.password).subscribe(x => this.redirect());
  }

  redirect() {
    this.router.navigate(['/r/all']);
  }
}
