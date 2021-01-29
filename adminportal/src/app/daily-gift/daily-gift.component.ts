import { Component, Input, OnInit } from '@angular/core';
import { DailyGiftState } from '../interfaces/models/DailyGift';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'daily-gift',
  templateUrl: './daily-gift.component.html',
  styleUrls: ['./daily-gift.component.css']
})
export class DailyGiftComponent implements OnInit {

  @Input() dailyGift: DailyGiftState;

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.dailyGift = portalSyncResponse.dailyGift;
    });
  }

}
