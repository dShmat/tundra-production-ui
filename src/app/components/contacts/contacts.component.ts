import { Component } from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {
  PriceCardTopPricingComponent
} from '../price-package-list/price-card-top-pricing/price-card-top-pricing.component';

@Component({
  selector: 'tp-contacts',
  imports: [
    AsyncPipe,
    PriceCardTopPricingComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
