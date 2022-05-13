import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  API_URL = "https://reqres.in/api/user";
  API_URL2 = "https://reqres.in/api/users?page=2";
  

  getUser(): Observable<any> {
    //return this.GetAll(this.API_URL2).toPromise();
    return this.http.get(this.API_URL2);
  }

  createUser(User:any){
    return this.http.post(this.API_URL,User);
  }

  updateUser(User:any){
    return this.http.put(this.API_URL,User);
  }

  deleteUser(id:string){
    return this.http.delete(this.API_URL+"/"+id)
  }

  GetAll<T>(uri: string) {
    // const options = this.prepareOptions();
    return this.http.get(`${uri}`);
    //.pipe(
    //   map((response: T) => {
    //     return response;
    //   })
    // );
  }

}


