import { Component, OnInit } from '@angular/core';
import {student} from './student/student';
//import { UserService } from '../user.service';
import { user } from './student/user';
import {regrexResponse} from '../Modal/RegrexResponse';
import { UserService } from '../services/user.service';
import { fade } from '../animation';



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
  animations : [fade]
})
export class StudentsListComponent {

  users :user[] = new regrexResponse().data; 
  
  constructor(public userservice : UserService){ 
    userservice.getUsers().then(res => {
      this.users = res.data;
    }).catch(err => {
      this.users = new regrexResponse().data;
    });
  }

  //users = this.getUser();
  //test = this.userservice.getUsers();
  //test : regrexResponse = this.getUser();
  // getUser() : any {
  //   // debugger;
  //     this.userservice.getUser().subscribe((response)=>{
  //       // debugger;
  //       // console.log(response);
  //       this.test =  response;
  //       //return response;
  //     },(error=>{
  //     }));

  //     //this.test = this.userservice.getUser();
  // }
  
 
  // students  =[ 
  //   { name : 'Jay', std : 12, age : 22, city : 'Gondal' },
  //   { name : 'Gaurav', std : 11, age : 23, city : 'Rajkot' },
  //   { name : 'Dharm', std : 12, age : 24, city : 'Ahmedabad' },
  //   { name : 'ViJay', std : 10, age : 21, city : 'Gondal' },
  //   { name : 'Somil', std : 11, age : 20, city : 'Vadodara' },
  //   { name : 'Mayank', std : 13, age : 18, city : 'Gondal' },
  //   { name : 'Deep', std : 11, age : 22, city : 'Bhuj' },
  //   { name : 'Shrey', std : 12, age : 20, city : 'Porbandar' },
  //   { name : 'Raj', std : 11, age : 15, city : 'Surat' },
  //   { name : 'Ankur', std : 10, age : 17, city : 'Junagadh' }
  // ]
}
