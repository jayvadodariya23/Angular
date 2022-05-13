import { Component, Input, OnInit } from '@angular/core';
import {student} from './student';
import { user } from './user';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{

  @Input() stud : student;
  @Input() user : user;
}
