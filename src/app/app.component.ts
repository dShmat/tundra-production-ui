import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PricePackageListComponent} from './components/price-package-list/price-package-list.component';

@Component({
  selector: 'tp-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PricePackageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tundra-production-ui';
}
