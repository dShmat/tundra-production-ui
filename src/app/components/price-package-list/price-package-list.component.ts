import {Component, inject} from '@angular/core';
import {PriceCardTopPricingComponent} from "./price-card-top-pricing/price-card-top-pricing.component";
import {PriceCardWithFooterComponent} from './price-card-with-footer/price-card-with-footer.component';
import {PriceCardSimpleComponent} from './price-card-simple/price-card-simple.component';
import {PricePackage} from '../../models/price-package.model';
import {FileReaderService} from '../../services/file-reader.service';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'pt-price-package-list',
  imports: [
    PriceCardTopPricingComponent,
    PriceCardWithFooterComponent,
    PriceCardSimpleComponent,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './price-package-list.component.html',
  styleUrl: './price-package-list.component.scss'
})

export class PricePackageListComponent {

  private readonly fileReaderService = inject(FileReaderService);
  public pricePackages$: Observable<PricePackage[]> = this.fileReaderService.getPricePackages$();
}
