import { Component, OnInit } from '@angular/core';
import { fade } from '../animation';

@Component({
  selector: 'app-materialui',
  templateUrl: './materialui.component.html',
  styleUrls: ['./materialui.component.css'],
  animations : [fade],
  host: { '[@fade]': '' }
})
export class MaterialuiComponent {
  

}
