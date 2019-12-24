import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BaseserviceService } from '../baseservice.service';
import { environment } from '../../../environments/environment';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable, of } from 'rxjs';

// const this.httpHeadersOptions() = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'x-auth': localStorage.getItem("accesToken")
//   })
// };
let httpParams = new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  public baseUrl;
  constructor(private http: HttpClient, public baseService: BaseserviceService) {
    this.baseUrl = baseService.baseUrl1 + 'api/master/';
  }

  uploadfile(file, userKey, cb) {
    const bucket = new S3({
        accessKeyId: environment.accessKeyId,
        secretAccessKey: environment.secretAccessKey,
        region: environment.region
      });

    // Key: this.FOLDER + this.UUID + '/'+ file.name,
    const params = {
      Bucket: 'topsocial',
      Key: userKey + '/' + file.name,
      Body: file
    };

    bucket.upload(params, function (err, data) {
      console.log(err,data)
      if (err) {
        cb(err, null);
        console.log('There was an error uploading your file: ', err);
        return err;
      }
      cb(null, data);
      return data;
    });
    return "ok";
  }


  //theme apis
  addingTheme(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingTheme", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getTheme() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getTheme", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getThemeById(theme_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getThemeById/${theme_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  UpdateTheme(value) {
    var body = value;
    return this.http.put<any>(this.baseUrl + "UpdateTheme", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delTheme(value) {
    let id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteTheme/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }


  //journey apis
  addingJourney(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingJourney", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getJourney() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getJourney", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getJourneyId(journey_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getJourneyById/${journey_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getLoyalityById(loyality_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getLoyalityTypeById/${loyality_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateJourney(value) {
    var body = value;
    console.log(body);
    return this.http.put<any>(this.baseUrl + `updateJourney`, body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delJourney(value) {
    var id = value;
    console.log(id);

    return this.http.delete<any>(this.baseUrl + "deleteJourney/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  //adding training type
  addingTrainingType(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingTtraining", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getTraining() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getTraining", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delTrainingType(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteTtraining/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  //Event Type 
  addNewEvent(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingEvent", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delEventType(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteEvent/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getEventType() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getEvent", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCountryById(country_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getCountryById/${country_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  //Country Service
  addingCountry(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingCountry", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateCountry(value) {
    var body = value;
    return this.http.put<any>(this.baseUrl + "updateCountry", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingMenu(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingMenu", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingCurrency(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingCurrency", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  //Adding Training Type
  addingProfession(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingProfession", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingLoyality(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingLoyalityType", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCountry() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getCountry", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getMenuById(menu_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getMenuById/${menu_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateMenu(munuBody) {
    var body = munuBody;
    return this.http.put<any>(this.baseUrl + "updateMenu", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  addingProspect(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingProspect", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));

  }
  getMenu() {
    var body = {};
    // return this.http.get<any>(this.baseUrl + "getMenuById/1",  this.httpHeadersOptions())
    return this.http.post<any>(this.baseUrl + "getMenu", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));

  }
  getCurrency() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getCurrency", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCurrencyById(currency_id) {
    var body = {};
    return this.http.post<any>(this.baseUrl + `getCurrency/${currency_id}`, body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateCurrency(currency_body) {
    var body = currency_body;
    return this.http.put<any>(this.baseUrl + "updateCurrency", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getTrainingType() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getTraining", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getTrainingTypeById(trainingType_id) {
    var body = {};
    return this.http.post<any>(this.baseUrl + `getTraining/${trainingType_id}`, body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateTrainingType() {
    var body = {};
    return this.http.put<any>(this.baseUrl + "updateTtraining", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getProfession() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getProfession", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getLoyality() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getLoyalityType", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getProspect() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getProspect", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getProfessionById(profession_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getProfessionById/${profession_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateProfession(professionBody) {
    var body = professionBody;
    return this.http.put<any>(this.baseUrl + "updateProfession", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getIndustry() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getIndustry", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCompanyType() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getCompany", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingCompany(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingCompany", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));

  }
  addNewIndustry(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingIndustry", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delMenu(value) {
    var id = value;
    return this.http.delete<any>(this.baseUrl + "deleteMenu/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));

  }
  delCountry(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteCountry/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateLoyality(loyality_body) {
    var body = loyality_body;
    return this.http.put<any>(this.baseUrl + "updateLoyalityType", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delCurrency(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteCurrency/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));

  }
  delIndustry(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteIndustry/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delCompanyType(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteCompany/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getProspectById(prospect_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getProspectById/${prospect_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateProspect(prospect_body) {
    var body = prospect_body;
    return this.http.put<any>(this.baseUrl + `updateProspect`, body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delProfession(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteProfession/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delProspect(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteProspect/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delLoyality(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteLoyalityType/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getEventTypeById(event_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getEventById/${event_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateEventType(event_body) {
    var body = event_body;
    return this.http.put<any>(this.baseUrl + "updateEvent", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getTrainingId(training_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getTtrainingById/${training_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  UpdateTraining(training_body) {
    var body = training_body;
    return this.http.put<any>(this.baseUrl + "updateTraining", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getIndustryId(industry_id) {
    var body = industry_id;
    return this.http.get<any>(this.baseUrl + `getIndustryById/${industry_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateIndustry(industry_body) {
    var body = industry_body;
    return this.http.put<any>(this.baseUrl + "updateIndustry", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateCompany(company_body) {
    var body = company_body;
    return this.http.put<any>(this.baseUrl + "updateCompany", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCompanyById(company_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getCompanyById/${company_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getCurrencyId(currency_id) {
    var body = currency_id;
    return this.http.get<any>(this.baseUrl + `getCurrencyById/${currency_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  UpdateCurrency(industry_body) {
    var body = industry_body;
    return this.http.put<any>(this.baseUrl + "updateCurrency", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getPermissions() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getPermissions", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delpermission(value){
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deletePermissions/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingNewPermission(value) {
    console.log(value);
    
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingPermissions", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getPermissionById(per_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getPermissionsById/${per_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updatePermission(permission_body) {
    var body =permission_body;
    return this.http.put<any>(this.baseUrl + "updatePermissions", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getRole() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getRole", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delRole(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteRole/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingRole(value) {
    console.log(value);
    
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingRole", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getRoleById(role_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getRoleById/${role_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateRole(permission_body) {
    var body =permission_body;
    return this.http.put<any>(this.baseUrl + "updateRole", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getModule() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getModule", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delModule(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteRole/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingModule(value) {
    console.log(value);
    
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingModule", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getModuleById(module_id) {
    var body = {};
    console.log(module_id);
    
    return this.http.get<any>(this.baseUrl + `getModuleById/${module_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateModule(Module_body) {
    var body =Module_body;
    return this.http.put<any>(this.baseUrl + "updateModule", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  importBulk(url, value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + url, body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  
  exportBulk(value) {
    var body = value;
    return this.http.post<any>(this.baseUrl + "getBulkData", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }

  getModuleItems() {
    var body = {};
    return this.http.post<any>(this.baseUrl + "getModuleItems", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  delModuleItems(value) {
    var id = value;
    console.log(id);
    return this.http.delete<any>(this.baseUrl + "deleteModuleItems/" + id.id, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  addingModuleItems(value) {
    console.log(value);
    
    var body = value;
    return this.http.post<any>(this.baseUrl + "addingModuleItems", body, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  getModuleItemsById(moduleitems_id) {
    var body = {};
    return this.http.get<any>(this.baseUrl + `getModuleItemsById/${moduleitems_id}`, this.httpHeadersOptions())
      .pipe(catchError(this.handleError));
  }
  updateModuleItems(moduleitems_body) {
    var body =moduleitems_body;
    return this.http.put<any>(this.baseUrl + "updateModuleItems", body, this.httpHeadersOptions())
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
        `Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
