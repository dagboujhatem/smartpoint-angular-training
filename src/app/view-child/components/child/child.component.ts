import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  userName = 'Jhon Doe';

  constructor() { }

  ngOnInit(): void {
  }

  clickMe(){
    alert(this.userName);
  }

}
