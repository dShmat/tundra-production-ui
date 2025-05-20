import { Component } from '@angular/core';
import {PricePackageListComponent} from '../../components/price-package-list/price-package-list.component';

@Component({
  selector: 'pt-home-page',
  imports: [
    PricePackageListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
