import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    // TO DO: Connect to real api -- not done in this exerise
    this.apiUrl = 'http://localhost:7890';
  }

  async getTweets(
    screenName: string,
    count: number = 30,
    maxId: string = ''
  ) {
    let query = `${this.apiUrl}/1.1/statuses/user_timeline.json?count=${count}&screen_name=${screenName}`;
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

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}
