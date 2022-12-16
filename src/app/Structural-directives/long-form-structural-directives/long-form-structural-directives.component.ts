import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-form-structural-directives',
  templateUrl: './long-form-structural-directives.component.html',
  styleUrls: ['./long-form-structural-directives.component.scss']
})
export class LongFormStructuralDirectivesComponent implements OnInit {

  // ngIf example
  hide = false;
  punchline = 'punchline'
  // ngFor example
  // Link: https://angular.io/api/common/NgForOf
  jokes = [
    { setup: "What did the cheese say when it looked in the mirror?", punchline: "Hello-me (Halloumi)", hide: true },
    { setup: "What kind of cheese do you use to disguise a small horse?", punchline: "Mask-a-pony (Mascarpone)", hide: true },
    { setup: "A kid threw a lump of cheddar at me", punchline: "I thought ‘That’s not very mature’", hide: true },
  ];
  toggle(i: number) {
    this.jokes[i].hide = !this.jokes[i].hide;
  }
  // ngSwitch example
  // Link : https://angular.io/api/common/NgSwitch
  // Link : https://www.tektutorialshub.com/angular/angular-ngswitch-directive/#important-points

  items: any[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }, { name: 'Four', val: 3 }, { name: 'Five', val: 3 }];
  selectedValue1: string = 'One';
  selectedValue2: string = 'One';
  selectedValue3: string = 'One';
  selectedValue4: string = 'One';
  
  constructor() { }

  ngOnInit(): void {
  }

}
