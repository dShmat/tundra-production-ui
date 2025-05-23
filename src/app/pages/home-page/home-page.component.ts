import { Component } from '@angular/core';
import {PricePackageListComponent} from '../../components/price-package-list/price-package-list.component';
import {HeroImageSectionComponent} from '../../components/hero-image-section/hero-image-section.component';
import {DescriptionSectionComponent} from '../../components/description-section/description-section.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';

@Component({
  selector: 'pt-home-page',
  imports: [
    PricePackageListComponent,
    HeroImageSectionComponent,
    DescriptionSectionComponent,
    ContactsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
