import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = ` I'm Parent Component`;
  childTitle = `I'm Child Text From Parent Component`;

  onNotify(event) {
    console.log(event);
  }

}
