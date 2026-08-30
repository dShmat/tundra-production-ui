import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'app-rules-page',
  imports: [
    RouterLink
  ],
  templateUrl: './rules-page.component.html'
})
export class RulesPageComponent {
  readonly i18n = inject(LocaleService);
}
