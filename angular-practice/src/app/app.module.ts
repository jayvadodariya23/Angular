import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { VideoComponent } from './video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialuiComponent } from './materialui/materialui.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { DirectiveComponent } from './directive/directive.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentComponent } from './students-list/student/student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentMasterComponent } from './student-master/student-master.component';
import { AddStudentModalComponent } from './students-list/add-student-modal/add-student-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    VideoComponent,
    MaterialuiComponent,
    DirectiveComponent,
    StudentsListComponent,
    StudentComponent,
    StudentMasterComponent,
    AddStudentModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
