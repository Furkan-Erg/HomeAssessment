import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    
  }

  changeColor_two(newColor: string) {
    var footerColor = document.getElementById('gfooter');
    var headerColor = document.getElementById('gheader');
    footerColor!.style.backgroundColor = newColor;
    headerColor!.style.backgroundColor = newColor;
  }
}
