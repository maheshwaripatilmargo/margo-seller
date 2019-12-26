import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BaseserviceService } from '../baseservice.service';
import { environment } from '../../../environments/environment';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FbService {
  public baseUrl;
  constructor(private http: HttpClient, public baseService: BaseserviceService) {
    this.baseUrl = baseService.baseUrl1 + 'api/fb/';
  }

  addingFbUsers(value, token) {
    var body = value;
    let httpOptions = this.httpHeadersOptions()
    if (token) {
      httpOptions.headers = httpOptions.headers.set('x-auth', token);
    }
    return this.http.post<any>(this.baseUrl + "account", body, httpOptions)
      .pipe(catchError(this.handleError));
  }




  // getCampaign() {
  //   var body = {};
  //   return this.http.get<any>(this.baseUrl + "campaign/100/0", this.httpHeadersOptions())
  //     .pipe(catchError(this.handleError));
  // }
 
//using
  getPostManagementData(catId) {
    console.log("service", catId);

    var body = {};
    return this.http.get<any>(this.baseUrl + `postByCategoryId/${catId}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
//using
  // getPostImagetData(Id) {
  //   console.log("service",Id);

  //   var body = {};
  //   return this.http.get<any>(this.baseUrl + `postByCategoryId/${Id}`, this.httpHeadersOptions())
  //     .pipe(catchError(this.handleError));
  // }
//useing
 getCategoryData() {
    var body = {};
    return this.http.get<any>(this.baseUrl + "postCategory/100/0", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }



  getCustomMessage(Id) {
 var body = {};
    return this.http.get<any>(this.baseUrl + `message/10/0`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  getCustomData(Id) {
   var body = {};
    return this.http.get<any>(this.baseUrl + `post/${Id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCustomimages(data){
    var body = {};
    return this.http.get<any>(this.baseUrl + `post/${data}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));

  }
 

//mid m-tpe m-desc isactive
  // getMessageData() {
  //   var body = {};
  //   return this.http.get<any>(this.baseUrl + "message/100/0", this.httpHeadersOptions())
  //     .pipe(catchError(this.handleError));
  // }

  //containe pid cid campid pname ddescription
  // getPostManagementDataa() {
  //   var body = {};
  //   return this.http.get<any>(this.baseUrl + "post/100/0", this.httpHeadersOptions())
  //     .pipe(catchError(this.handleError));
  // }







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
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

