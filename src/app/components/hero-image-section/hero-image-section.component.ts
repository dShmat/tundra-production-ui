import {Component} from '@angular/core';
import {ImageSliderComponent} from '../image-slider/image-slider.component';
import {SlideInterface} from '../../models/slide-interface';

@Component({
  selector: 'ts-hero-image-section',
  imports: [
    ImageSliderComponent
  ],
  templateUrl: './hero-image-section.component.html',
  styleUrl: './hero-image-section.component.scss'
})
export class HeroImageSectionComponent {
  customSlides: SlideInterface[] = [
    {
      url: 'assets/img/hero-image-1.avif',
      title: 'Image 1'
    },
    {
      url: 'assets/img/hero-image-2.avif',
      title: 'Image 2'
    },
    {
      url: 'assets/img/hero-image-3.avif',
      title: 'Image 3'
    }
  ]
}
