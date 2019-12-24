import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BaseserviceService } from '../baseservice.service';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public baseUrl;
  constructor(private http: HttpClient, public baseService: BaseserviceService) {
    this.baseUrl = baseService.baseUrl1 + "api/"
  }
  getClient() {
    var body = {};
    return this.http.get<any>(this.baseUrl + "company/30/0", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingCompany(value) {
    console.log(value);
    
    var body = value;
    return this.http.post<any>(this.baseUrl + "company", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  private httpHeadersOptions() {
    return this.baseService.httpHeadersOptions();
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
    return throwError('Something bad happened; please try again later.');
  };
}
