import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// const  apiUrl = 'http://192.168.1.10:8080/api/';
const  apiUrl = '../../assets/datatest/test.json';


@Injectable()
export class AuthService {

  constructor(private http: Http) {  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  onChurningHttpAction(){
  //  return this.http.get(apiUrl + "abapnrchurn")
   return this.http.get(apiUrl)
        .catch(this.formatErrors)
        .map((data: Response) => data.json());
  }
  // onInactiveHttpAction(){
  //   alert("onInactiveHttpAction");
  // }
  // onCancelledHttpAction(){
  //   alert("onCancelledHttpAction");
  // }
  // onFutureHttpAction(){
  //   alert("onFutureHttpAction");
  // }
  // onMultipleHttpAction(){
  //   alert("onMultipleHttpAction");
  // }
  
}
