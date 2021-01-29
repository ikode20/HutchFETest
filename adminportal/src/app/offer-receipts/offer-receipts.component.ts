import { Component, Input, OnInit } from '@angular/core';
import { UserOfferReceipt } from '../interfaces/models/UserOfferReceipt';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'offer-receipts',
  templateUrl: './offer-receipts.component.html',
  styleUrls: ['./offer-receipts.component.css']
})
export class OfferReceiptsComponent implements OnInit {

  @Input() receipts: UserOfferReceipt[];

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.receipts = portalSyncResponse.userOfferReceipts;
    });
  }

}
