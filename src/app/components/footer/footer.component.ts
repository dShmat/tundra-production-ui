import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'ts-footer',
  templateUrl: './footer.component.html',
  imports: [
    RouterLink
  ]
})
export class FooterComponent {
  readonly i18n = inject(LocaleService);
  readonly year = new Date().getFullYear();
}
