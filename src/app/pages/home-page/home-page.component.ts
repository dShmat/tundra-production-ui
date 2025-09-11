import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {BookingDialogComponent} from '../../components/booking-dialog/booking-dialog.component';
import {additionalRates, contacts, keyFeatures, priceNotes, spaces, studioRates} from '../../data/website-content.data';

@Component({
  selector: 'pt-home-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  router = inject(Router);
  dialog = inject(MatDialog);

  protected readonly priceNotes = priceNotes;
  protected readonly studioRates = studioRates;
  protected readonly additionalRates = additionalRates;

  goToEquipment() {
    this.router.navigate(['/equipment']);
  }

  openBooking() {
    this.dialog.open(BookingDialogComponent, { width: '520px', panelClass: 'glass' });
  }

  protected readonly keyFeatures = keyFeatures;
  protected readonly spaces = spaces;
  protected readonly contacts = contacts;
}
