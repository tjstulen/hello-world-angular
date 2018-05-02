import { Component, OnInit } from '@angular/core';
import { MaxService } from './max.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tamara';
  course ='MaxTrain Angular Class';
  names: string[] = [
    "Barbara", "Tamara", "Will", "Keith", "Greg"
  ];
  showAngularImage: boolean = true;
  buttonClick(): void {
    this.showAngularImage = !this.showAngularImage;
  }
  aboutText: string = "from app component New Created by Tamara";

  constructor(private max: MaxService) {
    console.log(this.max.about);
  }

}
