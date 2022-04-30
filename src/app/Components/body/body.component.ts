import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  Form!: FormGroup;
  constructor(private FormB: FormBuilder) {}

  ngOnInit(): void {
    this.prepareForm();
  }
  prepareForm() {
    this.Form = this.FormB.group({
      First: ['', Validators.required],
      Second: ['', Validators.required],
      Third: ['', Validators.required],
      Last: ['', Validators.required],
    });
  }
}
