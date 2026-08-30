import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {EquipmentPageComponent} from './pages/equipment-page/equipment-page.component';
import {RulesPageComponent} from './pages/rules-page/rules-page.component';
import {PrivacyPageComponent} from './pages/privacy-page/privacy-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

const localeRoutes = (prefix: '' | 'ru' | 'ar'): Routes => {
  const path = (page: string) => [prefix, page].filter(Boolean).join('/');
  return [
    {path: path(''), pathMatch: 'full', component: HomePageComponent},
    {path: path('equipment'), component: EquipmentPageComponent},
    {path: path('rules'), component: RulesPageComponent},
    {path: path('privacy'), component: PrivacyPageComponent},
  ];
};

export const routes: Routes = [
  ...localeRoutes(''),
  ...localeRoutes('ru'),
  ...localeRoutes('ar'),
  {path: '**', component: NotFoundPageComponent},
];
