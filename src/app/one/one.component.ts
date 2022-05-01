import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  constructor() {}
  mobile: boolean = false;
  ngOnInit(): void {
    this.checksize();
  }
  checksize() {
    var size = document.body.offsetWidth;
    if (size < 1024) {
      this.mobile = true;
    }
  }
}
