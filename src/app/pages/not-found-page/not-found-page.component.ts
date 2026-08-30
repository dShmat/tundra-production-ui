import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'tp-not-found-page',
  imports: [RouterLink],
  template: `
    <section class="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">404</p>
      <h1 class="mt-3 text-4xl font-semibold">{{ i18n.copy().notFound.title }}</h1>
      <p class="mt-3 text-slate-600">{{ i18n.copy().notFound.description }}</p>
      <a class="btn btn--primary mt-6" [routerLink]="i18n.pageUrl('home')">{{ i18n.copy().notFound.home }}</a>
    </section>
  `,
})
export class NotFoundPageComponent {
  readonly i18n = inject(LocaleService);
}
