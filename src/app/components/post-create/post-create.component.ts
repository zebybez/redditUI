import {Component, OnInit, Input} from '@angular/core';
import {PostService} from '../../services/post/post.service';
import {MessageService} from '../../services/message/message.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  loggedIn: boolean;
  subName: string;
  title: string;
  content: string;
  isNSFW: boolean;

  @Input()
  set subredditName(x: string) {
    this.subName = x;
  }

  constructor(private postService: PostService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  makePost() {
    this.postService.makePost(this.subName, this.title, this.content, false).subscribe(x => window.location.reload());
    // window.location.reload();
  }
}
