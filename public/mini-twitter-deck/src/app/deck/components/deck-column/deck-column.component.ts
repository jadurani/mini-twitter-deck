import { Component, OnInit, Input } from '@angular/core';
import { TwitterService } from '@shared/services/twitter.service';

@Component({
  selector: 'mtd-deck-column',
  templateUrl: './deck-column.component.html',
  styleUrls: ['./deck-column.component.scss']
})
export class DeckColumnComponent implements OnInit {
  @Input() screenName: string;
  @Input() rowCount: number;
  tweetList;

  constructor(private twitterService: TwitterService) { }

  ngOnInit() {
    this.twitterService
      .getTweets(this.screenName, this.rowCount)
      .subscribe(tweetList => {
        this.tweetList = tweetList;
      });
  }
}
