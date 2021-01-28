import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../interfaces/models/Car';
import { UserCar } from '../interfaces/models/UserCar';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input() cars: UserCar[];
  @Input() carsMap: Map<string, Car> = new Map<string, Car>();

  constructor() { }

  ngOnInit(): void {
  }

}
