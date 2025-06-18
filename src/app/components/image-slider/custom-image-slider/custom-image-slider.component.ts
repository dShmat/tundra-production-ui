import {Component, computed, DestroyRef, inject, input, signal} from '@angular/core';
import {SlideInterface} from '../../../models/slide-interface';
import {interval} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-custom-image-slider',
  templateUrl: './custom-image-slider.component.html',
  styleUrl: './custom-image-slider.component.scss'
})
export class CustomImageSliderComponent {

  slides = input<SlideInterface[]>([]);

  private readonly destroyRef = inject(DestroyRef);

  currentIndex = signal(0);
  currentBg = computed(() =>
    this.slides().length
      ? `url('${this.slides()[this.currentIndex()].url}')`
      : 'none'
  );

  constructor() {
    interval(3000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.next());
  }

  prev() {
    const len = this.slides().length;
    this.currentIndex.update(i => (i - 1 + len) % len);
  }

  next() {
    const len = this.slides().length;
    this.currentIndex.update(i => (i + 1) % len);
  }

  goTo(i: number) {
    this.currentIndex.set(i);
  }

  trackByIndex(_: number, i: number) {
    return i;
  }
}
