import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BaseserviceService } from '../baseservice.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
let httpParams = new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  public baseUrl;


  constructor(private http: HttpClient, public baseService: BaseserviceService) {
<<<<<<< HEAD
    this.baseUrl = baseService.baseUrl1 + 'auth/ds/';
=======
    this.baseUrl = baseService.baseUrl1 + 'auth/';
>>>>>>> b06a8923425332357620626aab38c5f0dc65ddbf
  }
  checkLogin2() {
    return this.http.get<any>(this.baseUrl + "get-events-list")
      .pipe(
        catchError(this.handleError)
      );
  }

  checkLogin(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "login", body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  checkForgotPassword(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "forgotpassword", body, httpOptions)
      .pipe(catchError(this.handleError));
  }
  resetPasswordService(value, body) {
    // var body = value;
    return this.http.post<any>(`${this.baseUrl}resetPassword/${value}`, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  forgotUserNames(value) {
    let body = value;
    return this.http.post<any>(`${this.baseUrl}forgotUserName`, body, httpOptions)
      .pipe(catchError(this.handleError));
  }
  setUserNameService(value, token) {
    let body = value;
    return this.http.post<any>(`${this.baseUrl}resetUserName/${token}`, body, httpOptions)
      .pipe(catchError(this.handleError));
  }
  verifyUserName(value, token) {
    let body = value;
    if (token) {
      httpOptions.headers = httpOptions.headers.set('x-auth', token);
    }
<<<<<<< HEAD
    return this.http.post<any>(`${this.baseService.baseUrl1}api/ds/checkUserNameExists`, body, httpOptions)
=======
    return this.http.post<any>(`${this.baseService.baseUrl1}user/checkUserNameExists`, body, httpOptions)
>>>>>>> b06a8923425332357620626aab38c5f0dc65ddbf
      .pipe(catchError(this.handleError));
  }

  //tohandle the error
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

