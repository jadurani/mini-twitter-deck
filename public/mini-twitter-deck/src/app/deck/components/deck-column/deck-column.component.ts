import { Component, OnInit, Input, HostListener } from '@angular/core';
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

  loading: boolean;
  maxId: string;

  constructor(private twitterService: TwitterService) {
    this.tweetList = [];
    this.maxId = '';
  }

  ngOnInit() {
    this.loadTweets();
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    const currentScrollHeight =
      event.srcElement.offsetHeight +
      event.srcElement.scrollTop;
    if (
      !this.loading &&
      currentScrollHeight >= event.srcElement.scrollHeight - 24
    ) {
      this.loadTweets();
    }
  }

  loadTweets() {
    this.loading = true;
    this.twitterService
      .getTweets(this.screenName, this.rowCount, this.maxId)
      .then(tweetList => {
        this.tweetList = [...this.tweetList, ...tweetList];
        this.loading = false;

        this.maxId = tweetList[tweetList.length - 1].id_str;
      });
  }
}
