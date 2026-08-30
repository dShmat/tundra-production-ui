import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {BookingDialogComponent} from '../../components/booking-dialog/booking-dialog.component';
import {additionalRates, contacts, studioRates} from '../../data/website-content.data';
import {LocaleService} from '../../i18n/locale.service';

@Component({
  selector: 'pt-home-page',
  imports: [
    RouterLink
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  dialog = inject(MatDialog);
  readonly i18n = inject(LocaleService);

  protected readonly studioRates = studioRates;
  protected readonly additionalRates = additionalRates;
  protected readonly instagramImages = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];

  openBooking() {
    this.dialog.open(BookingDialogComponent, { width: '520px', panelClass: 'glass' });
  }

  protected readonly contacts = contacts;
}
