import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../services/message/message.service';
import {SubredditService} from '../../services/subreddit/subreddit.service';
import {Subreddit} from '../../domain/subreddit';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  name: string;
  subreddit: Subreddit;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private subredditService: SubredditService) {
  }

  ngOnInit() {
    this.messageService.add('reddit component launched');
    this.subredditService.getSubredditByName(this.route.snapshot.paramMap.get('name')).subscribe(x => this.subreddit = x);
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
