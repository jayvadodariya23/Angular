import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl :'./directive.component.html',
  styleUrls: ['./directive.component.css']
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
