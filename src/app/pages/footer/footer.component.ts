import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Output() event: EventEmitter<any> = new EventEmitter;
  previous() {
    this.event.emit('previous')
  }
  next() {
    this.event.emit('next')
  }
}
