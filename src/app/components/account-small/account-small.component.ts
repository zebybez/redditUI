import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-small',
  templateUrl: './account-small.component.html',
  styleUrls: ['./account-small.component.css']
})
export class AccountSmallComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/r/all']);
    window.location.reload();
  }

}
