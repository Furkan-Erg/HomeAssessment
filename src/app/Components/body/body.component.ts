import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
}
