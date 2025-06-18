import {Component, computed, DestroyRef, inject, input, signal} from '@angular/core';
import {interval} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {SlideInterface} from '../../models/slide-interface';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'ts-image-slider',
  imports: [
    FormsModule
  ],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
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
