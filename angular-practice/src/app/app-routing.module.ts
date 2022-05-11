import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { DirectiveComponent } from './directive/directive.component';
import { MaterialuiComponent } from './materialui/materialui.component';
import { Test2Component } from './test2/test2.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'test2',component:Test2Component},
  {path:'video',component:VideoComponent},
  {path:'materialUI',component:MaterialuiComponent},
  {path:'directive',component:DirectiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
