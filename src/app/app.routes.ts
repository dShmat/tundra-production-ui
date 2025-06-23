import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {EquipmentPageComponent} from './pages/equipment-page/equipment-page.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent,
  },
  {
    path: 'equipment', component: EquipmentPageComponent,
  },
  {
    path: 'equipment/:category', component: EquipmentPageComponent,
  },
  {
    path: '**', redirectTo: '',
  }
];
