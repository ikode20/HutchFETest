import { Component, Input, OnInit } from '@angular/core';
import { DailyGiftState } from '../interfaces/models/DailyGift';

@Component({
  selector: 'daily-gift',
  templateUrl: './daily-gift.component.html',
  styleUrls: ['./daily-gift.component.css']
})
export class DailyGiftComponent implements OnInit {

  @Input() dailyGift: DailyGiftState;

  constructor() { }

  ngOnInit(): void {
  }

}
