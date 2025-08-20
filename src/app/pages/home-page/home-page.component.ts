import {AfterViewInit, Component, inject} from '@angular/core';
import {NgForOf, NgOptimizedImage, NgSwitch} from '@angular/common';
import {Card} from '../../models/models';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {BookingDialogComponent} from '../../components/booking-dialog/booking-dialog.component';

@Component({
  selector: 'pt-home-page',
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements AfterViewInit {

  router = inject(Router);
  dialog = inject(MatDialog);

  spaces: Card[] = [
    { image: 'images/spaces/cyclorama_init.jpg', name: 'Cyclorama', description: 'Seamless white cyc with overhead grid.' },
    { image: 'images/spaces/stylised_init.png', name: 'Stylised location', description: 'Designed sets with changeable props.' },
    { image: 'images/spaces/terrace_init.png', name: 'Terrace', description: 'Open‑air terrace with city light.' }
  ];

  equipment: Card[] = [
    { image: 'images/equipment/light_init.png', name: 'Light', description: 'Strobes, continuous & modifiers.', type: 'light' },
    { image: 'images/equipment/cameras_init.png', name: 'Cameras', description: 'Full‑frame bodies & lenses.', type: 'cameras' },
    { image: 'images/equipment/more_init.png', name: 'Other', description: 'Grip, stands, backdrops & more.' }
  ];

  contact = {
    phoneDisplay: '+971 (58) 555 55 55',
    phoneLink: '+971585555555',
    email: 'tundra.production@gmail.com',
    address: 'Beach - Shop B9, Al Faridah Building, Al Raha Blvd, Al Zeina, Abu Dhabi',
    mapUrl: 'https://maps.app.goo.gl/qvU93LNRbUHNuvVi8',
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/' },
      { label: 'Facebook',  href: 'https://facebook.com/' },
      { label: 'TikTok',    href: 'https://www.tiktok.com/' },
      { label: 'YouTube',   href: 'https://youtube.com/' }
    ]
  };

  goToEquipment(type?: 'light'|'cameras'|'other') {
    this.router.navigate(['/equipment'], { queryParams: { type } });
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  openBooking() {
    this.dialog.open(BookingDialogComponent, { width: '520px', panelClass: 'glass' });
  }
}
