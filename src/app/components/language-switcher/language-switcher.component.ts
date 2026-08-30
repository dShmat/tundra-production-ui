import {Component, HostListener, inject, signal} from '@angular/core';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'ts-language-switcher',
  templateUrl: './language-switcher.component.html',
  host: {class: 'relative inline-flex'},
})
export class LanguageSwitcherComponent {
  readonly i18n = inject(LocaleService);
  readonly isOpen = signal(false);

  toggle(event: MouseEvent): void {
    event.stopPropagation();
    this.isOpen.update(value => !value);
  }

  close(): void {
    this.isOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
