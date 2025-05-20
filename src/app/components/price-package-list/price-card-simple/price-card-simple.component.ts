import {Component, Input} from '@angular/core';
import {PricePackage} from '../../../models/price-package.model';

@Component({
  selector: 'tp-price-card-simple',
  imports: [],
  templateUrl: './price-card-simple.component.html',
  styleUrl: './price-card-simple.component.scss'
})
export class PriceCardSimpleComponent {
  @Input()
  public pricePack!: PricePackage;
}
