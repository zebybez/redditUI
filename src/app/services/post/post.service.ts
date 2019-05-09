import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message/message.service';
import {Post} from '../../domain/post';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = 'http://localhost:8080/reddit/api/posts';  // URL to post web api


  constructor(private http: HttpClient, private messageService: MessageService) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`this.postUrl`, {}).pipe(
      tap(x => this.log(`got all ${x.length} posts`)),
      catchError(this.handleError<Post[]>('get all posts'))
    );
  }

  /** Log a message to the messageService */
  private log(message: string) {
    this.messageService.add(`authService: ${message}`);
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
