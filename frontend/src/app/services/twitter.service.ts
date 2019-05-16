import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var require: any;
const baseUrl = require ('../../../config.json');
@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor( private http: HttpClient ) { }

  getTweets():Promise<any>{
    return this.http.get(baseUrl.backend_url + '/tweets').toPromise();
}
}
