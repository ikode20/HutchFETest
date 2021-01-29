import { Component, Input, OnInit } from '@angular/core';
import { LogEntry } from '../interfaces/models/LogEntry';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'player-errors',
  templateUrl: './player-errors.component.html',
  styleUrls: ['./player-errors.component.css']
})
export class PlayerErrorsComponent implements OnInit {

  @Input() entries: LogEntry[];

  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.entries = portalSyncResponse.logEntries;
    });
  }

}
