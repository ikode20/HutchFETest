import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../interfaces/models/Resource';
import { UserResource } from '../interfaces/models/UserResource';

@Component({
  selector: 'resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  @Input() resources: UserResource[];
  @Input() resourceMap: Map<string, Resource>;

  constructor() { }

  ngOnInit(): void {
  }

}
