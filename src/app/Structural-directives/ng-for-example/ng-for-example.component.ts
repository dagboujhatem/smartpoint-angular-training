import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.scss']
})
export class NgForExampleComponent implements OnInit {
  // simple way
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

  // with grouping
  peopleByCountry: {country: string, people: {name: string}[]}[] = [
    {
      'country': 'UK',
      'people': [
        {
          "name": "Douglas  Pace"
        },
        {
          "name": "Mcleod  Mueller"
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          "name": "Day  Meyers"
        },
        {
          "name": "Aguirre  Ellis"
        },
        {
          "name": "Cook  Tyson"
        }
      ]
    }
  ];

  // With tracked by option
  // Link: https://nicolasfazio.ch/programmation/angular/speed-ngfor-fonction-trackby
  // Vidéo demo: https://www.youtube.com/watch?v=wUq7yQVjmFw

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

  constructor() { }

  ngOnInit(): void {
  }

}
