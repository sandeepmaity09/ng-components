import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = `I'm Child Component`;
  @Input('titlee') childTitle: string;

  @Output() nofify: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    console.log('onClick Pressed');
    this.nofify.emit('Click from nested Component');
  }

}
