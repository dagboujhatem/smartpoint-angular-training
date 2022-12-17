import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild('pargraphe') par?: ElementRef;
  @ViewChild(ChildComponent) child?: ChildComponent;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.par);
    // console.log(this.child);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log(this.par);

    // change the style, class & innerHTML of the native element
    // const element =  this.par?.nativeElement as HTMLElement
    // element.style.backgroundColor = 'red';
    // element.classList.add('text-center');
    // element.classList.add('my-5');
    // element.innerHTML = 'lorem ipsum .....'

    //
    // console.log(this.child);

  }

  // child commminication: change property
  changeChildProperty(){
    const child : any= this.child
    child.userName = 'Hatem DAGHBOUJ'
  }

  // child commminication: call a method
  callChildMethod(){
    this.child?.clickMe();
  }

}
