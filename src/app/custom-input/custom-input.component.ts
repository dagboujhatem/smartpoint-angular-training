import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  myForm?: FormGroup;
  submitted= false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName : ['ddd'],
      lastName : [''],
      email : [''],
      password : [''],
      passwordConfirmation : [''],
    })
  }

  create(){
    this.submitted = true;
    if(this.myForm?.invalid){
      return;
    }
    alert(JSON.stringify(this.myForm?.value));
    this.submitted = false;
  }

}
