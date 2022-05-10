import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materialui',
  template: `
    <div style="background-color: #303030;">
     
      <button mat-button color="accent">Normal</button>
      <button mat-raised-button color="primary">Normal</button>
      <button mat-stroked-button color="warn">Normal</button>
      <br><br>
      <mat-form-field >
        <mat-label>Favorite food</mat-label>
        <input matInput placeholder="Ex. Pizza" >
      </mat-form-field>
    </div>
  `,
  styles: [`
  
  `]
})
export class MaterialuiComponent {
  

}
