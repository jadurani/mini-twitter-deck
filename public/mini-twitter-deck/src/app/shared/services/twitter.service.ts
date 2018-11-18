import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // TO DO: Connect to real api -- not done in this exerise
    this.apiUrl = 'http://localhost:7890';
  }

  getTweets(
    screenName: string,
    count: number = 30,
  ) {
    return this.http.get(`${this.apiUrl}/1.1/statuses/user_timeline.json?count=${count}&screen_name=${screenName}`)
      .pipe(
        map((tweetList: Array<any>) => {
          tweetList.forEach(tweet => {
            tweet.created_at = new Date(tweet.created_at);
          });
          return tweetList;
        })
      );
  }

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}
