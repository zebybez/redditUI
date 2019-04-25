import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RedditComponent} from './components/reddit/reddit.component';

const routes: Routes = [
  {path: 'r/:name', component: RedditComponent},
  {path: '', redirectTo: '/r/all', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
