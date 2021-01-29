import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer } from '../enums/Manufacturer';
import { Resource } from '../interfaces/models/Resource';
import { UserResource } from '../interfaces/models/UserResource';
import { PortalSyncService } from '../services/portal-sync.service';
import { StaticDataService } from '../services/static-data.service';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  @Input() resources: UserResource[];
  @Input() resourceMap: Map<string, Resource> = new Map<string, Resource>();

  constructor(private portalSyncService: PortalSyncService, private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder").subscribe(staticDataResponse => {

      for (let i = 0; i < staticDataResponse.resources.length; i++) {
        this.resourceMap.set(staticDataResponse.resources[i].resourceId, staticDataResponse.resources[i]);
      }

      this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
        this.resources = portalSyncResponse.userResources;
      });
    });
  }

  onAddResource(id) {
    // TODO
  }

  onRemoveResource(id) {
    // TODO
  }

}
