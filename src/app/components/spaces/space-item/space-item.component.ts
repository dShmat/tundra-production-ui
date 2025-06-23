import {Component, input} from '@angular/core';
import {Space} from '../../../models/space-model';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'ts-space-item',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './space-item.component.html',
  styleUrl: './space-item.component.scss'
})
export class SpaceItemComponent {

  public space = input.required<Space>();
}
