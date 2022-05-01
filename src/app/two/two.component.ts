import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
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
