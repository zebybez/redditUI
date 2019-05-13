import { Component, OnInit } from '@angular/core';
import {SubredditService} from '../../services/subreddit/subreddit.service';
import {MessageService} from '../../services/message/message.service';

@Component({
  selector: 'app-reddit-create',
  templateUrl: './reddit-create.component.html',
  styleUrls: ['./reddit-create.component.css']
})
export class RedditCreateComponent implements OnInit {

  rules: string;
  subredditName: string;
  constructor(private subredditService: SubredditService, private messageService: MessageService) { }

  ngOnInit() {
  }

  createSubreddit() {
    this.messageService.add(this.rules);
    this.subredditService.createNewSubreddit(this.subredditName, this.rules);
  }

}
