import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl : './video.component.html',
  styleUrls: ['./video.component.css']
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
