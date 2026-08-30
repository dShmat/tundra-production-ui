import {DOCUMENT} from '@angular/common';
import {DestroyRef, inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {filter, startWith} from 'rxjs';
import {contacts} from '../data/website-content.data';
import {LocaleService, SUPPORTED_LOCALES} from '../i18n/locale.service';
import {Locale, SitePage} from '../i18n/site-copy';

const SITE_ORIGIN = 'https://www.tundrastd.com';

@Injectable({providedIn: 'root'})
export class SeoService {
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(LocaleService);
  private readonly destroyRef = inject(DestroyRef);

  init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      startWith(null),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => this.update());
  }

  private update(): void {
    const locale = this.i18n.localeFromUrl(this.router.url);
    const page = this.i18n.pageFromUrl(this.router.url);
    const copy = this.i18n.copy();

    this.document.documentElement.lang = locale;
    this.document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    this.document.body.dir = locale === 'ar' ? 'rtl' : 'ltr';

    if (!page) {
      this.title.setTitle(`${copy.notFound.title} | Tundra Studio`);
      this.meta.updateTag({name: 'description', content: copy.notFound.description});
      this.meta.updateTag({name: 'robots', content: 'noindex, follow'});
      this.removeManagedHeadElements();
      return;
    }

    const seo = copy.seo[page];
    const canonical = `${SITE_ORIGIN}${this.i18n.pageUrl(page, locale)}`;
    this.title.setTitle(seo.title);
    this.meta.updateTag({name: 'description', content: seo.description});
    this.meta.updateTag({name: 'robots', content: 'index, follow, max-image-preview:large'});
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:site_name', content: 'Tundra Studio'});
    this.meta.updateTag({property: 'og:title', content: seo.title});
    this.meta.updateTag({property: 'og:description', content: seo.description});
    this.meta.updateTag({property: 'og:url', content: canonical});
    this.meta.updateTag({property: 'og:image', content: `${SITE_ORIGIN}/images/og-tundra-studio.jpg`});
    this.meta.updateTag({property: 'og:image:alt', content: copy.home.heroAlt});
    this.meta.updateTag({property: 'og:locale', content: this.openGraphLocale(locale)});
    this.meta.updateTag({name: 'twitter:card', content: 'summary_large_image'});
    this.meta.updateTag({name: 'twitter:title', content: seo.title});
    this.meta.updateTag({name: 'twitter:description', content: seo.description});
    this.meta.updateTag({name: 'twitter:image', content: `${SITE_ORIGIN}/images/og-tundra-studio.jpg`});

    this.removeManagedHeadElements();
    this.appendLink('canonical', canonical);
    for (const alternateLocale of SUPPORTED_LOCALES) {
      this.appendLink('alternate', `${SITE_ORIGIN}${this.i18n.pageUrl(page, alternateLocale)}`, alternateLocale);
    }
    this.appendLink('alternate', `${SITE_ORIGIN}${this.i18n.pageUrl(page, 'en')}`, 'x-default');
    this.appendStructuredData(page, locale, canonical, seo.title, seo.description);
  }

  private removeManagedHeadElements(): void {
    this.document.head.querySelectorAll('[data-tundra-seo]').forEach(element => element.remove());
  }

  private appendLink(rel: string, href: string, hreflang?: string): void {
    const link = this.document.createElement('link');
    link.rel = rel;
    link.href = href;
    link.setAttribute('data-tundra-seo', 'true');
    if (hreflang) link.hreflang = hreflang;
    this.document.head.appendChild(link);
  }

  private appendStructuredData(page: SitePage, locale: Locale, canonical: string, title: string, description: string): void {
    const graph: Record<string, unknown>[] = [
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: 'Tundra Studio',
        inLanguage: ['en', 'ru', 'ar'],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_ORIGIN}/#business`,
        name: 'Tundra Studio',
        url: `${SITE_ORIGIN}/`,
        description: this.i18n.copy().seo.home.description,
        image: `${SITE_ORIGIN}/images/og-tundra-studio.jpg`,
        telephone: contacts.phoneLink,
        email: contacts.email,
        priceRange: 'AED 370–2500',
        currenciesAccepted: 'AED',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Beach - Shop B9, Al Faridah Building, Al Raha Blvd, Al Zeina',
          addressLocality: 'Abu Dhabi',
          addressCountry: 'AE',
        },
        areaServed: { '@type': 'City', name: 'Abu Dhabi' },
        sameAs: [contacts.instagram, contacts.mapUrl],
        hasMap: contacts.mapUrl,
        potentialAction: {
          '@type': 'ReserveAction',
          target: 'https://calendly.com/tundra/studio-rental',
          name: this.i18n.copy().actions.book,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: {'@id': `${SITE_ORIGIN}/#website`},
        about: {'@id': `${SITE_ORIGIN}/#business`},
      },
    ];

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'tundra-structured-data';
    script.setAttribute('data-tundra-seo', 'true');
    script.textContent = JSON.stringify({'@context': 'https://schema.org', '@graph': graph});
    this.document.head.appendChild(script);
  }

  private openGraphLocale(locale: Locale): string {
    return locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_AE' : 'en_AE';
  }
}
