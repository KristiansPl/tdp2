import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-road',
  standalone: true,
  imports: [MatTab, MatTabGroup],
  templateUrl: './road.component.html',
  styleUrl: './road.component.scss'
})
export class RoadComponent {

}
