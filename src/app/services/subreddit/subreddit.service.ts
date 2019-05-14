import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message/message.service';
import {Subreddit} from '../../domain/subreddit';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  private subredditUrl = 'http://localhost:8080/reddit/api/subreddits';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getSubredditByName(name1: string): Observable<Subreddit> {
    return this.http.get<Subreddit>(`${this.subredditUrl}/${name1}`, {}).pipe(
      tap(x => this.log(`got subreddit with name ${name1}`)),
      catchError(this.handleError<Subreddit>(`get subreddit by name`))
    );
  }
  createNewSubreddit(userName: string, subredditName: string, rulez: string): Observable<Subreddit> {
    return this.http.post<Subreddit>(this.subredditUrl, null, {headers: {username: userName, name: subredditName, rules: rulez}}).pipe(
      tap(x => this.log('added new subreddit'),
      catchError(this.handleError<Subreddit>('create new subreddit'))
    ));
  }
  /** Log a message to the messageService */
  private log(message: string) {
    this.messageService.add(`subredditService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
