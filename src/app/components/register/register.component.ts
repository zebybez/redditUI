import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {MessageService} from '../../services/message/message.service';

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

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.submitted = false;
  }

  onRegister() {
    this.submitted = true;
    this.authService.register(this.email, this.name, this.password).subscribe(x => this.redirect(x));
  }

  redirect(x) {
    if (x !== undefined) {
      this.router.navigate(['/r/all']);
    }
  }
}
