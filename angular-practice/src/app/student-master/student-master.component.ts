import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AddStudentModalComponent } from '../students-list/add-student-modal/add-student-modal.component';

@Component({
  selector: 'app-student-master',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.css']
})
export class StudentMasterComponent  {

  display = "none";
  constructor(private router:Router,private modalService: NgbModal){
    
  }
  showStudentList = () => {
    this.router.navigate(['student/studentList']);
  }

  open = () => {
    const modalRef = this.modalService.open(AddStudentModalComponent);
    modalRef.componentInstance.name = 'World';
  }
  
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
