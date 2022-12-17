import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-compteur',
  templateUrl: './child-compteur.component.html',
  styleUrls: ['./child-compteur.component.scss']
})
export class ChildCompteurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

}
