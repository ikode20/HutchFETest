import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../interfaces/models/Car';
import { UserCar } from '../interfaces/models/UserCar';
import { PortalSyncService } from '../services/portal-sync.service';
import { StaticDataService } from '../services/static-data.service';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() cars: UserCar[];
  @Input() carsMap: Map<string, Car> = new Map<string, Car>();

  constructor(private portalSyncService: PortalSyncService, private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder").subscribe(staticDataResponse => {
      // Additional cars map is needed to get static car data by carId as user cars doesn't contain all the required visual properties (e.g car model)
      for (let i = 0; i < staticDataResponse.cars.length; i++) {
        this.carsMap.set(staticDataResponse.cars[i].carId, staticDataResponse.cars[i]);
      }
      this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
        this.cars = portalSyncResponse.userCars;
      });
    });
  }

  onSelectCar(car) {
    // TODO
  }

  onRemoveCar(car) {
    // TODO
  }

}
