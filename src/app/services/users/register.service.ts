
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { catchError, map } from 'rxjs/operators';
=======
import { catchError } from 'rxjs/operators';
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
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
<<<<<<< HEAD
      .pipe(catchError(this.handleError));
  }

  getCompanyData() {
    return this.http.get<any>(this.baseUrl + "user/getCompanyData", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getRoleData() {
    return this.http.get<any>(this.baseUrl + "user/getRoleDataChild", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getRoleData2(value) {
    return this.http.get<any>(this.baseUrl + "user/getRoleData/" + value, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getModuleData() {
    return this.http.get<any>(this.baseUrl + "user/getModuleRoleAssignHierarchyData", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getModuleData1(value) {
    return this.http.get<any>(this.baseUrl + "user/getModuleItemDataById/" + value, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
=======
    .pipe(catchError(this.handleError));
  }
  
  getCompanyData() {
    return this.http.get<any>(this.baseUrl + "user/getCompanyData", this.httpHeadersOptions())
    .pipe(catchError(this.handleError));
  }
  getRoleData() {
    return this.http.get<any>(this.baseUrl + "user/getRoleData", this.httpHeadersOptions())
    .pipe(catchError(this.handleError));
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
  }
  getUserById(id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `user/getUserById/${id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
<<<<<<< HEAD
  }
  getPermissionData() {
    var body = {};
    return this.http.get<any>(this.baseUrl + `user/getPermissionsData`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateUser(body) {
    var body = body;
    return this.http.put<any>(this.baseUrl + "user/updateUser", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getRoleAction(value) {
    let body = {};
    return this.http.get<any>(this.baseUrl + "api/roleAction/" + value, this.httpHeadersOptions())
      .pipe(
        map(data => data.map((item: any) => {
          item.get_admin_role_action_fun.permission_list = item.get_admin_role_action_fun.permission_list.split(",");
          return item;
        })))
      .pipe(catchError(this.handleError));
  }
getModuleItems(){
  return this.http.get<any>(this.baseUrl + "user/getModuleItemData", this.httpHeadersOptions())
  .pipe(catchError(this.handleError));
}
  getModuleDataChild(){
    return this.http.get<any>(this.baseUrl + "user/getModuleDataChild", this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

=======
  }   
  updateUser(body) {
    var body = body;
    console.log(body);
    
    return this.http.put<any>(this.baseUrl + "user/updateUser", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
>>>>>>> 6d546429cbcdc6cd68288aa7c60635edfbdcf19c
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