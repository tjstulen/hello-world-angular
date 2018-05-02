import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'about-comp',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

 // aboutText: string = "Created by Tamara Collins";

  constructor() { }
  @Input() abouttxt: string;  
  
  aString: string = "This a test";

  ngOnInit() {
  }
  ngOnDestroy() {

  }
}
