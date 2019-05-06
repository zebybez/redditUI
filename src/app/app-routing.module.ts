import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedditComponent} from './components/reddit/reddit.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AccountSmallComponent} from './components/account-small/account-small.component';

const routes: Routes = [
  {path: 'account', component: AccountSmallComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'r/:name', component: RedditComponent},
  {path: '', redirectTo: '/r/all', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
