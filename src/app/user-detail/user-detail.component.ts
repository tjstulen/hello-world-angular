import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit  {

  user: any;
  
  constructor(
    private usersvc: UserService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(u => {
        console.log("User: ", u);
        this.user = u;
      });
  }

}
