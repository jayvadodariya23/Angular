import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `<h3>Welcome! {{userName}} With Userid : {{userId}} And This userName is loaded With Function : {{getUserName()}}</h3>
              <button (click)="toggleButton()" [disabled]="isDisabledButton">{{isDisabledButton ? "Enable Me" : "Disable Me"}}</button>
              <button (click)="enableButton()" *ngIf="isDisabledButton">{{"Enable Button"}}</button> <br><br>
              <input (input)="setUserName($event)" placeholder="Enter User Name" /> <br><br>
              <button (click)="saveUser()">Save User</button>
              {{"Your Name is :" + displayName }} <br>
              <h3> Two Way Data Binding Example</h3>
              <input [(ngModel)]="twowayVariable" placeholder="Two Way Data Binding Example"/>
              {{"Two Way : " + twowayVariable}}
              `,
  styles: [``]
})
export class Test2Component {

    userName = "";
    displayName = "";
    userId = 10;
    isDisabledButton = false;

    twowayVariable= ""

    getUserName = () => {
      return this.userName;
    }

    toggleButton = () => {
      this.isDisabledButton = !this.isDisabledButton;
    }

    enableButton = () => {
      this.isDisabledButton = false;
    }

    setUserName = (event : any) => {
      this.userName = event.target.value;
    }

    saveUser = () => {
      this.displayName = this.userName;
    }
}
