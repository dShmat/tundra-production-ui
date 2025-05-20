import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PricePackage} from '../models/price-package.model';

@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  private readonly http = inject(HttpClient);

  getPricePackages$(): Observable<PricePackage[]> {
    return this.http.get<PricePackage[]>('assets/data/price-packages.json');
  }
}
