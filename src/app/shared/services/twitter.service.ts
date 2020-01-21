import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  constructor(private http: HttpClient) {}

  async getTweets(
    screenName: string,
    count: number = 30,
    maxId: string = ''
  ) {
    let query = `/statuses/user_timeline?count=${count}&screen_name=${screenName}`;
    if (maxId !== '') {
      query += `&max_id=${maxId}`;
    }

    return await this.http.get(query)
      .pipe(
        take(1),
        map((tweetList: Array<any>) => {
          tweetList.forEach(tweet => {
            tweet.created_at = new Date(tweet.created_at);
          });
          return tweetList;
        }),
      )
      .toPromise();
  }
}
