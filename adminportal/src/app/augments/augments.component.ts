import { Component, Input, OnInit } from '@angular/core';
import { Augment } from '../interfaces/models/Augment';
import { UserAugment } from '../interfaces/models/UserAugment';

@Component({
  selector: 'augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.css']
})
export class AugmentsComponent implements OnInit {

  @Input() augments: UserAugment[];
  @Input() augmentMap: Map<string, Augment>

  constructor() { }

  ngOnInit(): void {
  }

}
