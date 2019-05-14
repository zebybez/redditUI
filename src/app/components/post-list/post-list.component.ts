import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../domain/post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  _subredditName: string;
  posts: Post[];

  @Input()
  set subredditName(x: string) {
    this._subredditName = x;
    this.getPosts();
  }
  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    if (this._subredditName === 'all') {
      this.postService.getAllPosts().subscribe(x => this.posts = x);
    } else {
      this.postService.getPostsBySubredditName(this._subredditName).subscribe(x => this.posts = x);
    }
  }
}
