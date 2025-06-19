import {Component, inject} from '@angular/core';
import {GeneralEquipmentCardComponent} from '../general-equipment-card/general-equipment-card.component';
import {FileReaderService} from '../../../services/file-reader.service';
import {Observable} from 'rxjs';
import {Equipment} from '../../../models/equipment.model';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'ts-general-equipment-list',
  templateUrl: './general-equipment-list.component.html',
  imports: [
    GeneralEquipmentCardComponent,
    AsyncPipe
  ],
  styleUrl: './general-equipment-list.component.scss'
})
export class GeneralEquipmentListComponent {

  private readonly fileReaderService = inject(FileReaderService);
  public equipment$: Observable<Equipment[]> = this.fileReaderService.getEquipmentList$();

  moreItem: Equipment = {
    id: -1,
    name: "",
    description: "",
    imageURL: "assets/img/more.avif"
  }

}
