import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-form-structural-directives',
  templateUrl: './long-form-structural-directives.component.html',
  styleUrls: ['./long-form-structural-directives.component.scss']
})
export class LongFormStructuralDirectivesComponent implements OnInit {

  // ngIf example
  hide = false;
  punchline = 'punchline';
  isLoggedIn = false;

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

  // ngFor with tracked by option
  // Link: https://nicolasfazio.ch/programmation/angular/speed-ngfor-fonction-trackby
  // Vidéo demo: https://www.youtube.com/watch?v=wUq7yQVjmFw

  peoples: any[] = [
    {
      id: 0,
      name: "Douglas  Pace"
    },
    {
      id: 1,
      name: "Mcleod  Mueller"
    },
    {
      id: 2,
      name: "Day  Meyers"
    },
    {
      id: 3,
      name: "Aguirre  Ellis"
    },
    {
      id: 4,
      name: "Cook  Tyson"
    }
  ];

  refresh(){
    this.peoples = [
      {
        id: 0,
        name: "Douglas  Pace"
      },
      {
        id: 1,
        name: "Mcleod  Mueller"
      },
      {
        id: 2,
        name: "Day  Meyers"
      },
      {
        id: 3,
        name: "Aguirre  Ellis"
      },
      {
        id: 4,
        name: "Jhon  Doe"
      },
      {
        id: 5,
        name: "Cook  Tyson"
      },
      {
        id: 6,
        name: "Jhon  Doe"
      }
    ];
  }

  trackByFn(index: number, item: any) {
    return index; // or item.id
  }

  // ngSwitch example
  // Link : https://angular.io/api/common/NgSwitch
  // Link : https://www.tektutorialshub.com/angular/angular-ngswitch-directive/#important-points

  items: any[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }, { name: 'Four', val: 3 }, { name: 'Five', val: 3 }];
  selectedValue1: string = 'One';

  constructor() { }

  ngOnInit(): void {
  }

}
