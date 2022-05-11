import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { MaterialuiComponent } from './materialui/materialui.component';
import { StudentMasterComponent } from './student-master/student-master.component';
import { StudentComponent } from './students-list/student/student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { Test2Component } from './test2/test2.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path:'test2',component:Test2Component},
  {path:'video',component:VideoComponent},
  {path:'materialUI',component:MaterialuiComponent},
  {path:'directive',component:DirectiveComponent},
  {path:'student',component:StudentMasterComponent,
   children : [
     {path:'studentList', component : StudentsListComponent }
   ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
