import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildCompteurComponent } from '../child-compteur/child-compteur.component';

@Component({
  selector: 'app-parent-compteur',
  templateUrl: './parent-compteur.component.html',
  styleUrls: ['./parent-compteur.component.scss']
})
export class ParentCompteurComponent implements OnInit {
  // using template reference variable
  title1 = 'Parent interacts with child via local variable';
  // using viewChild
  title2 = 'Parent interacts with child via @ViewChild()';
  @ViewChild(ChildCompteurComponent) childCompteur?: ChildCompteurComponent;
  increment() {
    this.childCompteur?.increment();
  }

  decrement() {
    this.childCompteur?.decrement();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
