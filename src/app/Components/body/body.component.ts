import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  nextpage: string = '';
  Form = this.fb.group({
    First: ['', Validators.required],
    Second: ['', Validators.required],
    Third: ['', Validators.required],
    Last: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.checkpage();
  }
  toggle = true;
  status = 'Enable';

  checkpage() {
    if (document.URL.includes('two')) {
      this.nextpage = 'one';
    }
    if (document.URL.includes('one')) {
      this.nextpage = 'two';
    }
  }
  resetForm() {
    this.Form.reset();
  }
  //change color of footercomponent when user clicks on the button

  ChangeColor(newColor: string) {
    this.changecolorbtn(newColor);
    if (this.nextpage === 'two') {
      this.changecolorone(newColor);
    }
    if (this.nextpage === 'one') {
      this.changecolortwo(newColor);
    }
  }

  changecolortwo(newColor: string) {
    var gfooterColor = document.getElementById('gfooter');
    var gheaderColor = document.getElementById('gheader');

    gfooterColor!.style.backgroundColor = newColor;
    gheaderColor!.style.backgroundColor = newColor;
  }
  changecolorone(newColor: string) {
    var ffooterColor = document.getElementById('ffooter');
    var fheaderColor = document.getElementById('fheader');
    ffooterColor!.style.backgroundColor = newColor;
    fheaderColor!.style.backgroundColor = newColor;
  }
  changecolorbtn(newColor: string) {
    var submitbtn = document.getElementById('submitbtn');
    var resetbtn = document.getElementById('resetbtn');
    submitbtn!.style.backgroundColor = newColor;
    resetbtn!.style.backgroundColor = newColor;
  }
}
