import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer } from '../enums/Manufacturer';
import { FusionCredits } from '../interfaces/models/FusionCredits';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'fusion-credits',
  templateUrl: './fusion-credits.component.html',
  styleUrls: ['./fusion-credits.component.css']
})
export class FusionCreditsComponent implements OnInit {

  @Input() fusionCredits: FusionCredits[];
  @Input() carManufacturerEnumMap: any;

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.carManufacturerEnumMap = {};
    Object.keys(Manufacturer).forEach((manufacturer) => {
      this.carManufacturerEnumMap[Manufacturer[manufacturer]] = manufacturer;
    });

    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.fusionCredits = portalSyncResponse.fusionCredits;
    });
  }

}
