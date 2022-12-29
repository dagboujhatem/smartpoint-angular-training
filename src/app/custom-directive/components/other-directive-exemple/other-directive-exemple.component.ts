import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-directive-exemple',
  templateUrl: './other-directive-exemple.component.html',
  styleUrls: ['./other-directive-exemple.component.scss']
})
export class OtherDirectiveExempleComponent implements OnInit {

  title: string = "Custom Directives in Angular";
  show = true;
  constructor() { }

  ngOnInit(): void {
  }

}
