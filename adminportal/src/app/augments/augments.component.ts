import { Component, Input, OnInit } from '@angular/core';
import { Augment } from '../interfaces/models/Augment';
import { UserAugment } from '../interfaces/models/UserAugment';
import { PortalSyncService } from '../services/portal-sync.service';
import { StaticDataService } from '../services/static-data.service';

@Component({
  selector: 'augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.css']
})
export class AugmentsComponent implements OnInit {

  @Input() augments: UserAugment[];
  @Input() augmentMap: Map<string, Augment> = new Map<string, Augment>();

  constructor(private portalSyncService: PortalSyncService, private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder").subscribe(staticDataResponse => {
      for (let i = 0; i < staticDataResponse.augments.length; i++) {
        this.augmentMap.set(staticDataResponse.augments[i].augmentId, staticDataResponse.augments[i]);
      }
      this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
        this.augments = portalSyncResponse.userAugments;
      });
    });
  }

  onUnequipAugment(aug: UserAugment) {
    // TODO
  }

  onRemoveAugment(aug: UserAugment) {
    // TODO
  }

}
