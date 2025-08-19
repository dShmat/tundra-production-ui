import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {EquipmentPageComponent} from './pages/equipment-page/equipment-page.component';
import {RulesPageComponent} from './pages/rules-page/rules-page.component';
import {PrivacyPageComponent} from './pages/privacy-page/privacy-page.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent,
  },
  {
    path: 'equipment', component: EquipmentPageComponent,
  },
  {
    path: 'rules', component: RulesPageComponent,
  },
  {
    path: 'privacy', component: PrivacyPageComponent,
  },
  {
    path: '**', redirectTo: '',
  }
];
