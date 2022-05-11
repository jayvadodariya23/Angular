import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
  <div id="testNgClass" [ngClass]="currentClass">Test Ng Class</div><br>
  <button (click)="changeTheme()">Change Themes</button><br><br><hr>

  <h1>Heyy This is a ngIf Demo</h1>
  <div *ngIf="currentClass.blackTheme then blackTheme else purpleTheme">
  </div>
  <ng-template #blackTheme>
    <h2>Heyy This is a Black Theme</h2>
  </ng-template>
  <ng-template #purpleTheme>
    <h2>Heyy This is a Purple Theme</h2>
  </ng-template><br><br><hr>

  <h1> Heyy This is ngSwitch Demo</h1>
  Color : <input id="color" placeholder="Enter Your Favourite Color" [(ngModel)]="color"/>
  <div [ngSwitch]="color">
    <div *ngSwitchCase=" 'red' ">
      <h3>Heyy This is Red Case</h3>
    </div>
    <div *ngSwitchCase=" 'black' ">
      <h3>Heyy This is Black Case</h3>
    </div>
    <div *ngSwitchCase=" 'yellow' ">
      <h3>Heyy This is Yellow Case</h3>
    </div>
    <div *ngSwitchDefault>
      <h3>Heyy This is Default Case</h3>
    </div>
  </div>
  `,
  styles: [`

    .blackTheme{
      background-color : black;
      color : white;
    }

    .purpleTheme{
      background-color : purple;
      color : white;
    }
  `]
})
  export class DirectiveComponent {

    currentClass  = {
      blackTheme : true,
      purpleTheme : false
    }

    color = 'red';

    changeTheme = () => {
      this.currentClass.blackTheme = !this.currentClass.blackTheme;
      this.currentClass.purpleTheme = !this.currentClass.purpleTheme;
    }
  }
