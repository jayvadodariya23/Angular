import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
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
