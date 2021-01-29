import { Component, Input, OnInit } from '@angular/core';
import { SocialAccount } from '../interfaces/models/SocialAccount';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'social-accounts',
  templateUrl: './social-accounts.component.html',
  styleUrls: ['./social-accounts.component.css']
})
export class SocialAccountsComponent implements OnInit {

  @Input() accounts: SocialAccount[];

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.accounts = portalSyncResponse.socialAccounts;
    });
  }

}
