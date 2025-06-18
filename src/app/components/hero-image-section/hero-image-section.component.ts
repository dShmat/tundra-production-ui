import {Component} from '@angular/core';
import {ImageSliderComponent} from '../image-slider/image-slider.component';
import {SlideInterface} from '../../models/slide-interface';

@Component({
  selector: 'tp-hero-image-section',
  imports: [
    ImageSliderComponent
  ],
  templateUrl: './hero-image-section.component.html',
  styleUrl: './hero-image-section.component.scss'
})
export class HeroImageSectionComponent {
  customSlides: SlideInterface[] = [
    {
      url: 'https://images.unsplash.com/photo-1650790362847-3c1dd609d0c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80',
      title: 'Image 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=687&q=80',
      title: 'Image 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=687&q=80',
      title: 'Image 3'
    }
  ]
}
