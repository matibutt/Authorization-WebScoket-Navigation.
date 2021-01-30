import {Component, Input} from '@angular/core';
import {MapPoint} from '../shared/map-points/map-points.module';

@Component({
  selector: 'app-map-point-form',
  templateUrl: './map-point-form.component.html',
  styleUrls: ['./map-point-form.component.css']
})
export class MapPointFormComponent {
  @Input()
  mapPoint: MapPoint;

  constructor () {
  }

}
