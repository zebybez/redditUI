import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Post} from '../../domain/post';
import {PostService} from '../../services/post/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  subName: string;
  posts: Post[];

  @Input()
  set subredditName(x: string) {
    this.subName = x;
    this.getPosts();
  }
  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  getPosts() {
    if (this.subName === 'all') {
      this.postService.getAllPosts().subscribe(x => this.posts = x);
    } else {
      this.postService.getPostsBySubredditName(this.subName).subscribe(x => this.posts = x);
    }
  }
}
