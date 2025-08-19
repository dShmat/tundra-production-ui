import {AfterViewInit, Component, computed, inject, signal} from '@angular/core';
import {FileReaderService} from '../../services/file-reader.service';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {isDefined} from '../../utils/object-utils';

@Component({
  selector: 'ts-equipment-page',
  templateUrl: './equipment-page.component.html',
  imports: [
    AsyncPipe
  ],
  styleUrl: './equipment-page.component.scss'
})
export class EquipmentPageComponent implements AfterViewInit {

  private route = inject(ActivatedRoute);
  private content = inject(FileReaderService);
  typeSig = signal<'light' | 'cameras' | 'other' | undefined>(undefined);
  equipment$ = computed(() => this.content.equipmentByType$(isDefined(this.typeSig()) ? this.typeSig() : undefined));

  constructor() {
    const t = (this.route.snapshot.queryParamMap.get('type') ?? undefined) as any;
    this.typeSig.set(t === 'light' || t === 'cameras' || t === 'other' ? t : undefined);
  }

  setType(t?: 'light' | 'cameras' | 'other') {
    this.typeSig.set(t);
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }
}
