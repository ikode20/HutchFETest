import { Component, Input, OnInit } from '@angular/core';
import { LogEntry } from '../interfaces/models/LogEntry';

@Component({
  selector: 'player-errors',
  templateUrl: './player-errors.component.html',
  styleUrls: ['./player-errors.component.css']
})
export class PlayerErrorsComponent implements OnInit {

  @Input() entries: LogEntry[];

  constructor() { }

  ngOnInit(): void {
  }

}
