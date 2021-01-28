import { Component, Input, OnInit } from '@angular/core';
import { SocialAccount } from '../interfaces/models/SocialAccount';

@Component({
  selector: 'social-accounts',
  templateUrl: './social-accounts.component.html',
  styleUrls: ['./social-accounts.component.css']
})
export class SocialAccountsComponent implements OnInit {

  @Input() accounts: SocialAccount[];

  constructor() { }

  ngOnInit(): void {
  }

}
