import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PricePackage} from '../models/price-package.model';
import {Space} from '../models/space-model';
import {Equipment} from '../models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  private readonly http = inject(HttpClient);

  getPricePackages$(): Observable<PricePackage[]> {
    return this.http.get<PricePackage[]>('assets/data/price-packages.json');
  }

  getSpaceList$(): Observable<Space[]> {
    return this.http.get<Space[]>('assets/data/spaces.json');
  }

  getGeneralEquipmentList$(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>('assets/data/general-equipment.json');
  }

  getEquipmentList$(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>('assets/data/equipment.json');
  }
}
