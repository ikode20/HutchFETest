import { Component, Input, OnInit } from '@angular/core';
import { FTUEProgress } from '../interfaces/models/FTUEProgress';
import { PortalSyncService } from '../services/portal-sync.service';
import { StaticDataService } from '../services/static-data.service';

@Component({
  selector: 'ftue-progress',
  templateUrl: './ftue-progress.component.html',
  styleUrls: ['./ftue-progress.component.css']
})
export class FtueProgressComponent implements OnInit {

  @Input() ftueProgress: FTUEProgress[];
  @Input() orderedFTUEConfig: any = null;

  constructor(private portalSyncService: PortalSyncService, private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder").subscribe(staticDataResponse => {

      const ftueConfig = staticDataResponse.ftueConfig;
      this.orderedFTUEConfig = {};
      Object.keys(ftueConfig).forEach((ftueVersion) => {
        if (!this.orderedFTUEConfig.hasOwnProperty(ftueVersion)) {
          this.orderedFTUEConfig[ftueVersion] = {};
        }

        Object.keys(ftueConfig[ftueVersion]).forEach((ftueStory) => {
          const ftueSteps = Object.keys(ftueConfig[ftueVersion][ftueStory]);
          const orderedFTUESteps = [];// new Array(ftueSteps.length);
          for (let i = 0; i < ftueSteps.length; i++) {
            for (let j = 0; j < ftueSteps.length; j++) {
              if (ftueConfig[ftueVersion][ftueStory][ftueSteps[j]] === i) {
                orderedFTUESteps.push(ftueSteps[j]);
                break;
              }
            }
          }

          this.orderedFTUEConfig[ftueVersion][ftueStory] = orderedFTUESteps;
        });
      });

      this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
        this.ftueProgress = portalSyncResponse.ftueProgress;
      });
    });
  }

  onSubmitStarted(story: string) {
    // TODO
  }

  onSubmitComplete(story:string) {
    // TODO
  }

}
