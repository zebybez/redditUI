import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
