import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../domain/post';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() subredditName: string;
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPostsBySubredditName(this.subredditName).subscribe(x => this.posts = x);
  }
}
