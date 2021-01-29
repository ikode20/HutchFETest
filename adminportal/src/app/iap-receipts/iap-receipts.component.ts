import { Component, Input, OnInit } from '@angular/core';
import { UserIAPReceipt } from '../interfaces/models/UserIAPReceipt';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'iap-receipts',
  templateUrl: './iap-receipts.component.html',
  styleUrls: ['./iap-receipts.component.css']
})
export class IapReceiptsComponent implements OnInit {

  @Input() receipts: UserIAPReceipt[];

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.receipts = portalSyncResponse.userIAPReceipts;
    });
  }

}
