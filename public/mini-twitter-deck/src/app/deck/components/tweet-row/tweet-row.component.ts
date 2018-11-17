import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mtd-tweet-row',
  templateUrl: './tweet-row.component.html',
  styleUrls: ['./tweet-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TweetRowComponent implements OnInit {
  @Input() tweet;
  displayTweet;

  constructor() { }

  ngOnInit() {
    this.displayTweet = !!this.tweet.retweeted_status ?
      this.tweet.retweeted_status :
      this.displayTweet = this.tweet;
  }
}
