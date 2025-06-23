import {Component, input} from '@angular/core';
import {Equipment} from '../../../models/equipment.model';
import {GeneralEquipmentCardComponent} from '../general-equipment-card/general-equipment-card.component';

@Component({
  selector: 'ts-equipment-list',
  imports: [
    GeneralEquipmentCardComponent
  ],
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.scss'
})
export class EquipmentListComponent {
  equipment = input<Equipment[]>([]);
}
