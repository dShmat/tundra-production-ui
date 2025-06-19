import {Component, input} from '@angular/core';
import {Equipment} from '../../../models/equipment.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'ts-general-equipment-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './general-equipment-card.component.html',
  styleUrl: './general-equipment-card.component.scss'
})
export class GeneralEquipmentCardComponent {
  public item = input.required<Equipment>();
  public isMoreCard = input<boolean>(false);
}
