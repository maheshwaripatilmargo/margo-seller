
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BaseserviceService } from '../baseservice.service';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'x-auth': localStorage.getItem("accesToken")
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public baseUrl;
  // public baseUrl = 'https://margo-dev-team.herokuapp.com/auth/';
  // // public baselocal = "http://localhost:8080/auth/"
  constructor(private http: HttpClient, public baseService: BaseserviceService) {
    this.baseUrl = baseService.baseUrl1
  }
  createUser(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "user/adminRegister", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getUser() {
    var body = {};
    return this.http.get<any>(this.baseUrl + "user/getUsers/0/30/0", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  getType() {
    var body = {};
    return this.http.get<any>(this.baseUrl + "user/getAdminType", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getUserProfileDetails() {
    return this.http.get<any>(this.baseUrl + "user/getUserProfileDetails", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCountryData() {
    return this.http.get<any>(this.baseUrl + "user/getCountryData", this.httpHeadersOptions())
    .pipe(catchError(this.handleError));
  }
  
  getCompanyData() {
    return this.http.get<any>(this.baseUrl + "user/getCompanyData", this.httpHeadersOptions())
    .pipe(catchError(this.handleError));
  }
  getRoleData() {
    return this.http.get<any>(this.baseUrl + "user/getRoleData", this.httpHeadersOptions())
    .pipe(catchError(this.handleError));
  }
  getUserById(id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `user/getUserById/${id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }   
  updateUser(body) {
    var body = body;
    console.log(body);
    
    return this.http.put<any>(this.baseUrl + "user/updateUser", body, this.httpHeadersOptions())
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