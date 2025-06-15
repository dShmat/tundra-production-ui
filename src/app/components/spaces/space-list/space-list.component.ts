import { Component, inject } from '@angular/core';
import {SpaceItemComponent} from '../space-item/space-item.component';
import {FileReaderService} from '../../../services/file-reader.service';
import {Observable} from 'rxjs';
import {Space} from '../../../models/space-model';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'ts-space-list',
  imports: [
    SpaceItemComponent,
    AsyncPipe
  ],
  templateUrl: './space-list.component.html',
  styleUrl: './space-list.component.scss'
})
export class SpaceListComponent {

  private readonly fileReaderService = inject(FileReaderService);
  public spaces$: Observable<Space[]> = this.fileReaderService.getSpaceList$();

}
