import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  changeColor_one(newColor: string) {
    var footerColor = document.getElementById('ffooter');
    var headerColor = document.getElementById('fheader');
    footerColor!.style.backgroundColor = newColor;
    headerColor!.style.backgroundColor = newColor;
  }
}
