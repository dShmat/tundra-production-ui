import {Component, Input} from '@angular/core';
import {PricePackage} from '../../../models/price-package.model';

@Component({
  selector: 'tp-price-card-top-pricing',
  imports: [],
  templateUrl: './price-card-top-pricing.component.html',
  styleUrl: './price-card-top-pricing.component.scss'
})
export class PriceCardTopPricingComponent {
  @Input()
  public pricePack!: PricePackage;
}
