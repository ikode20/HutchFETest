import { Component, Input, OnInit } from '@angular/core';
import { UserOfferReceipt } from '../interfaces/models/UserOfferReceipt';

@Component({
  selector: 'offer-receipts',
  templateUrl: './offer-receipts.component.html',
  styleUrls: ['./offer-receipts.component.css']
})
export class OfferReceiptsComponent implements OnInit {

  @Input() receipts: UserOfferReceipt[];

  constructor() { }

  ngOnInit(): void {
  }

}
