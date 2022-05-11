import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private router:Router){

  }

  OnEdit = (event:any) => {
    console.log(event);
  }

  test2btnclick = () => {
    this.router.navigate(['test2']);    
  }

  materialbtnClick = () => {
    this.router.navigate(['materialUI']);    
  }

  directivebtnClick = () => {
    this.router.navigate(['directive']);
  }
  
  studclick = () => {
    this.router.navigate(['student']);
  }
}
