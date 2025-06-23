import {Component, inject, input} from '@angular/core';
import {Equipment} from '../../../models/equipment.model';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';

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
  public isClickable = input<boolean>(false);

  private router: Router = inject(Router);

  moveToEquipment() {
    this.router.navigate(['/equipment', this.item().type]);
  }
}
