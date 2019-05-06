import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../../services/message/message.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute, private messageService: MessageService) {
  }

  ngOnInit() {
    this.messageService.add('reddit component launched');
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
