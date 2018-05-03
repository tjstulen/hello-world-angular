import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about-comp',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

 // aboutText: string = "Created by Tamara Collins";

  constructor() { }
  @Input() abouttxt: string;  
  
  aString: string = "This an app from my Angular Class";

  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
