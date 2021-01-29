import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from '../interfaces/models/Fuel';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  @Input() fuel: Fuel;

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.fuel = portalSyncResponse.fuel;
    });
  }

}
