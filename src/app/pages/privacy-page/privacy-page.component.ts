import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-page',
  imports: [],
  templateUrl: './privacy-page.component.html'
})
export class PrivacyPageComponent {
  scrollTo(id: string) {
      document.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
