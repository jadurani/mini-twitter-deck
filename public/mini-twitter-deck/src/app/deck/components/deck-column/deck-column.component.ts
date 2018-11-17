import { Component, OnInit } from '@angular/core';
import { TwitterService } from '@shared/services/twitter.service';

@Component({
  selector: 'mtd-deck-column',
  templateUrl: './deck-column.component.html',
  styleUrls: ['./deck-column.component.scss']
})
export class DeckColumnComponent implements OnInit {
  tweetList;

  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
    this.twitterService
      .getTweets('sample_id')
      .subscribe(tweetList => {
        this.tweetList = tweetList;
      });
  }
}
