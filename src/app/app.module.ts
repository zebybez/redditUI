import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditComponent } from './components/reddit/reddit.component';
import { AccountSmallComponent } from './components/account-small/account-small.component';
import { PostSmallComponent } from './components/post-small/post-small.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { RedditCreateComponent } from './components/reddit-create/reddit-create.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditComponent,
    AccountSmallComponent,
    PostSmallComponent,
    PostListComponent,
    PostDetailComponent,
    CommentListComponent,
    CommentComponent,
    CommentCreateComponent,
    PostCreateComponent,
    RedditCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
