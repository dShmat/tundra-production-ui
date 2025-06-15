import {Component, input} from '@angular/core';
import {Space} from '../../../models/space-model';

@Component({
  selector: 'ts-space-item',
  imports: [],
  templateUrl: './space-item.component.html',
  styleUrl: './space-item.component.scss'
})
export class SpaceItemComponent {

  public space = input.required<Space>();
}
