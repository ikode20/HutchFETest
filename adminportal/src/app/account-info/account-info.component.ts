import { Component, Input, OnInit } from '@angular/core';
import { UserAppProfile } from '../interfaces/models/UserAppProfile';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  @Input() profile: UserAppProfile;

  constructor() { }

  ngOnInit(): void {
  }

}
