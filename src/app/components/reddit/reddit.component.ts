import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from '@angular/router';
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
  gotoName: string;

  constructor(private route: ActivatedRoute,
              private messageService: MessageService,
              private subredditService: SubredditService,
              private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.messageService.add('reddit component launched');
    this.name = this.route.snapshot.paramMap.get('name');
    this.initSubreddit();
  }

  initSubreddit() {
    if (this.name === 'all') {
      this.subreddit = new Subreddit(); // todo: make subreddit constructor
      this.subreddit.name = 'all';
      this.subreddit.rules = 'this is the overall subreddit, the reddit EULA apply';
    } else {
      this.subredditService.getSubredditByName(this.name).subscribe(x => this.subreddit = x);
    }
  }

  gotoSubreddit() {
    this.router.navigate(['/r/' + this.gotoName]);
    window.location.reload();
  }
}
