import {Component, OnInit} from '@angular/core';
import {SubredditService} from '../../services/subreddit/subreddit.service';
import {MessageService} from '../../services/message/message.service';
import {Subreddit} from '../../domain/subreddit';

@Component({
  selector: 'app-reddit-create',
  templateUrl: './reddit-create.component.html',
  styleUrls: ['./reddit-create.component.css']
})
export class RedditCreateComponent implements OnInit {

  rules: string;
  subredditName: string;
  loggedIn: boolean;

  constructor(private subredditService: SubredditService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  createSubreddit() {
    this.messageService.add(this.rules);
    this.subredditService.createNewSubreddit(localStorage.getItem('username'), this.subredditName, this.rules).subscribe(x => this.messageService.add('Subreddit: ' + (x as Subreddit).name + ' successfully added'));
  }

}
