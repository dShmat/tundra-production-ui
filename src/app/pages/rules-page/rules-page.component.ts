import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-rules-page',
  imports: [
    RouterLink
  ],
  templateUrl: './rules-page.component.html'
})
export class RulesPageComponent {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
