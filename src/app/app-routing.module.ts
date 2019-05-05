import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedditComponent} from './components/reddit/reddit.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'r/:name', component: RedditComponent},
  {path: '', redirectTo: '/r/all', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
