import {Component, computed, signal} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {isDefined} from '../../utils/object-utils';
import {CommonData, EquipmentType} from '../../models/models';
import {equipment} from '../../data/website-content.data';

@Component({
  selector: 'ts-equipment-page',
  templateUrl: './equipment-page.component.html',
  styleUrl: './equipment-page.component.scss'
})
export class EquipmentPageComponent {
  private readonly allEquipments: CommonData[] = equipment;
  protected readonly isDefined = isDefined;
  typeSig = signal<EquipmentType | undefined>(undefined);
  equipment$ = computed(() => this.getEquipmentByType(isDefined(this.typeSig()) ? this.typeSig() : undefined));

  setType(t?: EquipmentType | undefined) {
    this.typeSig.set(t);
  }

  getEquipmentByType(type: EquipmentType | undefined): CommonData[] {
    return isDefined(type) ? this.allEquipments.filter(i => i.type === type) : this.allEquipments;
  }

  protected readonly EquipmentType = EquipmentType;
}
