import { Component, Input, OnInit } from '@angular/core';
import { FTUEProgress } from '../interfaces/models/FTUEProgress';

@Component({
  selector: 'ftue-progress',
  templateUrl: './ftue-progress.component.html',
  styleUrls: ['./ftue-progress.component.css']
})
export class FtueProgressComponent implements OnInit {

  @Input() ftueProgress: FTUEProgress;
  @Input() orderedFTUEConfig: any;

  constructor() { }

  ngOnInit(): void {
  }

}
