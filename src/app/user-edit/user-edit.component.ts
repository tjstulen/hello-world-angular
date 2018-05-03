import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: any;

  save(): void {
    this.usersvc.change(this.user)
      .subscribe(rc => {console.log('edit result is: ', rc);
      this.router.navigateByUrl("/users/list");
    });
  }

  constructor(
    private usersvc: UserService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
    .subscribe(u => {
      console.log("User in Edit: ", u);
      this.user = u;
    });

  }
}
