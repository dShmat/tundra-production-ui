# TundraProductionUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

The production build prerenders 12 indexable routes: four pages in English, Russian (`/ru`) and Arabic (`/ar`). Run the SEO assertions after building:

```bash
npm run build
npm run test:seo
```

Optimized AVIF/WebP image variants can be regenerated from the source images with `npm run optimize:images`.

## Vercel and search setup

- Keep `www.tundrastd.com` as the primary production domain. The repository's `vercel.json` permanently redirects the apex domain and maps the clean localized URLs to prerendered files.
- Enable Deployment Protection for Preview Deployments in Vercel so preview URLs cannot be indexed.
- After a production deployment, confirm `/robots.txt`, `/sitemap.xml`, one URL per language, and a deliberately unknown URL. The unknown URL must return HTTP 404.
- Submit `https://www.tundrastd.com/sitemap.xml` in Google Search Console and request indexing for `/`, `/equipment`, `/ru`, `/ru/equipment`, `/ar`, and `/ar/equipment`.
- Keep the name, address, phone, working hours, website and Calendly link in Google Business Profile consistent with the website.
- Russian and Arabic copy in `src/app/i18n/site-copy.ts` is a publication draft and should be reviewed by the business owner or a native speaker before production release.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
