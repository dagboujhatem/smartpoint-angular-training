import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model-example',
  templateUrl: './ng-model-example.component.html',
  styleUrls: ['./ng-model-example.component.scss']
})
export class NgModelExampleComponent implements OnInit {
  // Link : https://www.tektutorialshub.com/angular/angular-data-binding/
  value?: string;
  constructor() { }

  ngOnInit(): void {
  }

  sendValueToBackend(){
    alert(this.value)
  }

}
