import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'tp-hero-image-section',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hero-image-section.component.html',
  styleUrl: './hero-image-section.component.scss'
})
export class HeroImageSectionComponent {

}
