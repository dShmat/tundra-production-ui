import {Component, HostListener, inject, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {distinctUntilChanged, filter, map, startWith} from 'rxjs';
import {NgClass} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {ContactDialogComponent} from '../contact-dialog/contact-dialog.component';

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

  router = inject(Router);
  dialog = inject(MatDialog);

  @HostListener('window:scroll')
  onScroll() {
    const viewportH = window.visualViewport?.height ?? window.innerHeight; // handles mobile chrome better
    const triggerPx = (viewportH * 97) / 100;              // convert vh → px
    this.isScrolled.set(window.scrollY > triggerPx);
  }

  private isHomePath(url: string): boolean {
    const clean = url.split('?')[0].split('#')[0].replace(/\/+$/, ''); // strip query/hash and trailing slash
    return clean === '' || clean === '/' || clean === '/home';
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

  scrollTo(id: string) {
    if(this.isHome()) {
      document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }

  openContactDialog() {
    this.dialog.open(ContactDialogComponent, { width: '520px', panelClass: 'glass' });
  }
}
