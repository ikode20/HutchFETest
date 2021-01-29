import { Component, Input, OnInit } from '@angular/core';
import { UserAppProfile } from '../interfaces/models/UserAppProfile';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  @Input() profile: UserAppProfile;

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.profile = portalSyncResponse.userProfile;
    });
  }

}
