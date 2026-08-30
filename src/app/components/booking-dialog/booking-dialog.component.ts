import {DOCUMENT, isPlatformBrowser} from '@angular/common';
import {AfterViewInit, Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'app-booking-dialog',
  imports: [],
  templateUrl: './booking-dialog.component.html'
})
export class BookingDialogComponent implements AfterViewInit {
  readonly i18n = inject(LocaleService);
  readonly loading = signal(true);
  readonly failed = signal(false);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    try {
      await this.loadCalendly();
    } catch {
      this.loading.set(false);
      this.failed.set(true);
      return;
    }
    const calendly = (window as typeof window & { Calendly?: { initInlineWidget(options: object): void } }).Calendly;
    if (calendly) {
      calendly.initInlineWidget({
        url: 'https://calendly.com/tundra/studio-rental',
        parentElement: this.document.getElementById('calendly-embed'),
      });
      this.loading.set(false);
    } else {
      this.loading.set(false);
      this.failed.set(true);
    }
  }

  private loadCalendly(): Promise<void> {
    const existing = this.document.querySelector<HTMLScriptElement>('script[data-calendly-widget]');
    if (existing) {
      return (window as typeof window & { Calendly?: unknown }).Calendly
        ? Promise.resolve()
        : new Promise(resolve => existing.addEventListener('load', () => resolve(), {once: true}));
    }
    return new Promise((resolve, reject) => {
      const script = this.document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.dataset['calendlyWidget'] = 'true';
      script.addEventListener('load', () => resolve(), {once: true});
      script.addEventListener('error', () => reject(new Error('Calendly failed to load')), {once: true});
      this.document.body.appendChild(script);
    });
  }
}
