import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private httpClient : HttpClient) { }

  get<T>(url : string):Observable<T>{
    return this.httpClient.get<T>(url);
  }
  
}
