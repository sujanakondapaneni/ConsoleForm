import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { Body } from '@angular/http/src/body';

@Injectable()
export class DataService {
    headers: Headers;
    options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
                                     this.headers.append('Access-Control-Allow-Origin', '*');
                                     this.headers.append('Access-Control-Allow-Credentials', 'true');
        this.options = new RequestOptions({ headers: this.headers });
   }

   createService(url: string, param: any): Observable<any> {
    let body = JSON.stringify(param);
    return this.http
        .post(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    }  
    
    private extractData(res: Response) {
      let body = res.json();
      return body || {};
  }

  private handleError(error: any)   {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
