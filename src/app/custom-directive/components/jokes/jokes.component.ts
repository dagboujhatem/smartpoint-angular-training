import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokes = [
    { setup: "What did the cheese say when it looked in the mirror?", punchline: "Hello-me (Halloumi)", hide: true },
    { setup: "What kind of cheese do you use to disguise a small horse?", punchline: "Mask-a-pony (Mascarpone)", hide: true },
    { setup: "A kid threw a lump of cheddar at me", punchline: "I thought ‘That’s not very mature’", hide: true },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
