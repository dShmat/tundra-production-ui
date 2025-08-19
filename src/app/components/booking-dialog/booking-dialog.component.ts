import {AfterViewInit, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

declare const Calendly: any;

@Component({
  selector: 'app-booking-dialog',
  imports: [
    FormsModule
  ],
  templateUrl: './booking-dialog.component.html',
  styleUrl: './booking-dialog.component.scss'
})
export class BookingDialogComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof Calendly !== 'undefined') {
      Calendly.initInlineWidget({
        url: 'https://calendly.com/d-shmat-contact/studio-rent',
        parentElement: document.getElementById('calendly-embed'),
      });
    } else {
      console.error('Calendly object not found. Ensure the script is loaded.');
    }
  }
}
