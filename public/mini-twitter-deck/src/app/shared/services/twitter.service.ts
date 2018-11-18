import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const apiUrl = 'http://localhost:7890';
@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getTweets(
    screenName: string,
    count: number = 30,
  ) {
    return this.http.get(`${apiUrl}/1.1/statuses/user_timeline.json?count=${count}&screen_name=${screenName}`)
      .pipe(
        map((tweetList: Array<any>) => {
          tweetList.forEach(tweet => {
            tweet.created_at = new Date(tweet.created_at);
          });
          return tweetList;
        })
      );
  }
}
