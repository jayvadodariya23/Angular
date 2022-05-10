import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `
    <div class="videoDiv">
      <h1>{{title}}</h1>
      <h3>{{desc}}</h3>
      <a [href]="url">Click Here To Watch Video</a><br><br>
      <button (click)="onEditVideoClick()">Edit Video</button>
    </div>
    `,
  styles: [`
    .videoDiv{
      border : 1px solid black;
      margin : 25px;
      width : 300px;
      padding : 10px;
    }
  `]
})
export class VideoComponent {

  @Input() title:string;
  @Input() desc:string;
  @Input() url:string;
  @Output() editVideo = new EventEmitter<any>();

  onEditVideoClick = () => {
    this.editVideo.emit(this.title);
  }
}
