import {Component, HostListener, inject, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';
import {NgClass} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ContactDialogComponent} from '../contact-dialog/contact-dialog.component';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  imports: [
    NgClass,
    RouterLink
  ]
})
export class HeaderComponent {
  mobileOpen = signal(false);
  isScrolled = signal(false);
  isHeroEndScrolled = signal(false);

  router = inject(Router);
  dialog = inject(MatDialog);
  readonly i18n = inject(LocaleService);

  @HostListener('window:scroll')
  onScroll() {
    const viewportH = window.visualViewport?.height ?? window.innerHeight;
    const triggerPx = (viewportH * 95) / 100;
    this.isHeroEndScrolled.set(window.scrollY > triggerPx);
    this.isScrolled.set(window.scrollY > 0);
  }

  private isHomePath(url: string): boolean {
    const clean = url.split('?')[0].split('#')[0].replace(/\/+$/, ''); // strip query/hash and trailing slash
    return clean === '' || clean === '/' || clean === '/ru' || clean === '/ar';
  }

  isHome = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      startWith(null),
      map(() => this.isHomePath(this.router.url)),
      distinctUntilChanged()
    ),
    {initialValue: this.isHomePath(this.router.url)}
  );

  openContactDialog() {
    this.dialog.open(ContactDialogComponent, { width: '520px', panelClass: 'glass' });
  }
}
