import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { GeneralHelper } from '../General/general-helper';
import { regrexResponse } from '../Modal/RegrexResponse';
import { HttpService } from './http.service';

let BASE_URL = "https://reqres.in/api";

@Injectable()
export class UserService {

  constructor(private httpService : HttpService) { }

  getUsers(){
    //let res : regrexResponse = new regrexResponse();

    let res = new Promise<regrexResponse>((resolve, reject)=> {

      this.httpService.get<regrexResponse>(BASE_URL + "/users").subscribe((response)=>{
        resolve(response);
      },(error)=> {
        reject(error);
      });

    });
    return res;
  }


}
