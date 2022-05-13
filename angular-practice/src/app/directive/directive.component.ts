import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';

@Component({
  selector: 'app-directive',
  templateUrl :'./directive.component.html',
  styleUrls: ['./directive.component.css'],
  animations : [fade]
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
