import { Component, Input, OnInit } from '@angular/core';
import { Fuel } from '../interfaces/models/Fuel';

@Component({
  selector: 'fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  @Input() fuel: Fuel;

  constructor() { }

  ngOnInit(): void {
  }

}
