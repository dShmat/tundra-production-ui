import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs';
import {Space} from '../models/space-model';
import {Contacts, EquipmentItem, SiteConfig} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  private readonly http = inject(HttpClient);

  site$ = this.http.get<SiteConfig>('content/site.json').pipe(shareReplay(1));
  spaces$ = this.http.get<Space[]>('content/spaces.json').pipe(shareReplay(1));
  equipment$ = this.http.get<EquipmentItem[]>('content/equipment.json').pipe(shareReplay(1));
  contacts$ = this.http.get<Contacts>('content/contacts.json').pipe(shareReplay(1));

  equipmentByType$(type?: 'light'|'cameras'|'other') {
    return this.equipment$.pipe(
      map(list =>
        type ?
          list.filter(i => i.type === type) :
          list)
    );
  }
}
