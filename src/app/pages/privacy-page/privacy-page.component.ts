import {Component, inject} from '@angular/core';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'app-privacy-page',
  imports: [],
  templateUrl: './privacy-page.component.html'
})
export class PrivacyPageComponent {
  readonly i18n = inject(LocaleService);
}
