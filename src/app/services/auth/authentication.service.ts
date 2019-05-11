import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from '../message/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authUrl = 'http://localhost:8080/reddit/api/auth';  // URL to auth web api

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  login(gemail: string, gpassword: string): Observable<string> {
    return this.http.post(`${this.authUrl}/${'login'}`, null, {headers: {email: gemail, password: gpassword}}).pipe(
      tap(x => this.log(`logged in with token: ${x}`)),
      catchError(this.handleError<string>('Login', ''))
    ) as Observable<string>;
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

  logout() {
    localStorage.clear();
  }
}
