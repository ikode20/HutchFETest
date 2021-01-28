import { Component, Input, OnInit } from '@angular/core';
import { UserIAPReceipt } from '../interfaces/models/UserIAPReceipt';

@Component({
  selector: 'iap-receipts',
  templateUrl: './iap-receipts.component.html',
  styleUrls: ['./iap-receipts.component.css']
})
export class IapReceiptsComponent implements OnInit {

  @Input() receipts: UserIAPReceipt[];

  constructor() { }

  ngOnInit(): void {
  }

}
