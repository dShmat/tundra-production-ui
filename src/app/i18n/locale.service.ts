import {computed, inject, Injectable, signal} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {Locale, SITE_COPY, SitePage} from './site-copy';

export const SUPPORTED_LOCALES: Locale[] = ['en', 'ru', 'ar'];

@Injectable({providedIn: 'root'})
export class LocaleService {
  private readonly router = inject(Router);
  private readonly localeSignal = signal<Locale>(this.localeFromUrl(this.router.url));

  readonly locale = this.localeSignal.asReadonly();
  readonly copy = computed(() => SITE_COPY[this.localeSignal()]);
  readonly isRtl = computed(() => this.localeSignal() === 'ar');

  readonly languages = SUPPORTED_LOCALES.map(locale => ({locale, label: SITE_COPY[locale].languageName}));

  constructor() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      this.localeSignal.set(this.localeFromUrl(event.urlAfterRedirects));
    });
  }

  localeFromUrl(url: string): Locale {
    const firstSegment = this.cleanUrl(url).split('/').filter(Boolean)[0];
    return firstSegment === 'ru' || firstSegment === 'ar' ? firstSegment : 'en';
  }

  pageFromUrl(url = this.router.url): SitePage | null {
    const segments = this.cleanUrl(url).split('/').filter(Boolean);
    if (segments[0] === 'ru' || segments[0] === 'ar') {
      segments.shift();
    }
    const page = segments[0] ?? '';
    if (page === '') return 'home';
    return page === 'equipment' || page === 'rules' || page === 'privacy' ? page : null;
  }

  pageUrl(page: SitePage, locale: Locale = this.locale()): string {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    const suffix = page === 'home' ? '' : `/${page}`;
    return `${prefix}${suffix}` || '/';
  }

  languageUrl(locale: Locale): string {
    return this.pageUrl(this.pageFromUrl() ?? 'home', locale);
  }

  sectionUrl(section: string): string {
    return `${this.pageUrl('home')}#${section}`;
  }

  private cleanUrl(url: string): string {
    return url.split('?')[0].split('#')[0].replace(/\/+$/, '');
  }
}
