import { Injectable } from '@angular/core';
import { WordInfo } from './word-info';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, takeUntil } from 'rxjs/operators';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }

  url = 'https://tmmserver3.herokuapp.com/api';

  /*
  private handleError(error: HttpErrorResponse): any {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return error.error;
  }
  */

  getWordInfo(Word: string) {
    const params = { params: new HttpParams().set('word', Word) };
    return this.http.get<any>(this.url, params)
      .pipe(
        takeUntil(timer(5000))
      );
  }

}
