import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse: boolean = true;
  title = 'Admin Portal';

  constructor() { }

  ngOnInit(): void {
  }

}
