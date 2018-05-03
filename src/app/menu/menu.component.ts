import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'menu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
//what gets displayed to usr
  menus: any[] =[
    { display: "Home",  route: '/home', tooltip: "Home page"}
    ,{ display: "Users",  route: '/users/list', tooltip: "User list page"}
  // ,{ display: "Detail",  route: '/users/detail', tooltip: "User detail page"}
  //  ,{ display: "Edit",  route: '/users/edit', tooltip: "User Edit page"}
    ,{ display: "About",  route: '/about', tooltip: "User About page"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
