import {Component, Input} from '@angular/core';
import {PricePackage} from '../../../models/price-package.model';

@Component({
  selector: 'tp-price-card-with-footer',
  imports: [],
  templateUrl: './price-card-with-footer.component.html',
  styleUrl: './price-card-with-footer.component.scss'
})
export class PriceCardWithFooterComponent {
  @Input()
  public pricePack!: PricePackage;
}
