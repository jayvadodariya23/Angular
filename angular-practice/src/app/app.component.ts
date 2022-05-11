import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
   <mat-toolbar>
        <span>Angular Material UI</span>
          <button mat-button style="margin-left : 30px" (click)="testbtnclick()">Test</button>
          <button mat-button (click)="test2btnclick()">Test2</button>
          <button mat-button (click)="materialbtnClick()">Material Page</button>
          <button mat-button (click)="directivebtnClick()">Directive</button>
      </mat-toolbar><br><br>
  <router-outlet></router-outlet>
  <!-- <app-test></app-test> <hr>
  <app-test2></app-test2><br><br><hr>
  <h1>Our YouTube Videos</h1>
  <app-video (editVideo)="OnEdit($event)" title="Video 1" desc="This Is a Video One Description" url="#"></app-video>
  <app-video (editVideo)="OnEdit($event)" title="Video 2" desc="This Is a Video Two Description" url="#"></app-video><hr>
  <app-materialui></app-materialui> -->
  
  `,
  styles: [`
  `]
})
export class AppComponent {
 
  constructor(private router:Router){

  }

  OnEdit = (event:any) => {
    console.log(event);
  }

  testbtnclick = () => {
    this.router.navigate(['test']);
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

}
