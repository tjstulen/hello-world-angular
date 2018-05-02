import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'welcome-comp',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() aname: string;  //one way binding

  constructor() { }

  ngOnInit() {
  }

}
