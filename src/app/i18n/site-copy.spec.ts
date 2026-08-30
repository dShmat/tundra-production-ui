import {SITE_COPY} from './site-copy';
import {SUPPORTED_LOCALES} from './locale.service';

describe('localized site copy', () => {
  const pages = ['home', 'equipment', 'rules', 'privacy'] as const;

  it('provides unique, descriptive SEO metadata for every locale and page', () => {
    const titles = new Set<string>();
    for (const locale of SUPPORTED_LOCALES) {
      for (const page of pages) {
        const seo = SITE_COPY[locale].seo[page];
        expect(seo.title.length).toBeGreaterThan(20);
        expect(seo.description.length).toBeGreaterThan(60);
        expect(titles.has(seo.title)).toBeFalse();
        titles.add(seo.title);
      }
    }
  });

  it('keeps legal section identifiers aligned between translations', () => {
    const englishRules = SITE_COPY.en.rules.sections.map(section => section.id);
    const englishPrivacy = SITE_COPY.en.privacy.sections.map(section => section.id);
    for (const locale of SUPPORTED_LOCALES) {
      expect(SITE_COPY[locale].rules.sections.map(section => section.id)).toEqual(englishRules);
      expect(SITE_COPY[locale].privacy.sections.map(section => section.id)).toEqual(englishPrivacy);
    }
  });

  it('contains no placeholder contact domains', () => {
    expect(JSON.stringify(SITE_COPY)).not.toContain('yourdomain.com');
  });
});
