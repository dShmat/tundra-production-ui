import { Component } from '@angular/core';
import {SpaceListComponent} from './space-list/space-list.component';

@Component({
  selector: 'tp-spaces',
  imports: [
    SpaceListComponent
  ],
  templateUrl: './spaces.component.html',
  styleUrl: './spaces.component.scss'
})
export class SpacesComponent {

}
