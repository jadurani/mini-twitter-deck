import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getTweets(
    user_id: string,
    count: number = 30,
    max_id: number = 0,
  ) {
    return this.http.get('./assets/dummy_data.json')
      .pipe(
        map(tweetList => {
          tweetList.forEach(tweet => {
            tweet.created_at = new Date(tweet.created_at);
          });
          return tweetList;
        })
      );
  }
}

// const DUMMY_DATA_ARRAY =
