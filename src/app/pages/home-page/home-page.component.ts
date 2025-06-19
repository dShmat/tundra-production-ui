import {Component} from '@angular/core';
import {HeroImageSectionComponent} from '../../components/hero-image-section/hero-image-section.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {SpaceListComponent} from '../../components/spaces/space-list/space-list.component';
import {
  GeneralEquipmentListComponent
} from '../../components/equipment/general-equipment-list/general-equipment-list.component';

@Component({
  selector: 'pt-home-page',
  imports: [
    HeroImageSectionComponent,
    ContactsComponent,
    SpaceListComponent,
    GeneralEquipmentListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
