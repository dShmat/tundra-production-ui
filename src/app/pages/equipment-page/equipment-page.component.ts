import {Component, computed, DestroyRef, inject, OnInit, Signal, signal} from '@angular/core';
import {FileReaderService} from '../../services/file-reader.service';
import {Observable} from 'rxjs';
import {Equipment, EquipmentType, SelectedEquipment} from '../../models/equipment.model';
import {EquipmentListComponent} from '../../components/equipment/equipment-list/equipment-list.component';
import {
  EquipmentFilterPanelComponent
} from '../../components/equipment/equipment-filter-panel/equipment-filter-panel.component';
import {ActivatedRoute} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'ts-equipment-page',
  imports: [
    EquipmentListComponent,
    EquipmentFilterPanelComponent
  ],
  templateUrl: './equipment-page.component.html',
  styleUrl: './equipment-page.component.scss'
})
export class EquipmentPageComponent implements OnInit {

  private readonly fileReaderService = inject(FileReaderService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  private category = signal<string>('');

  private equipment$: Observable<Equipment[]> = this.fileReaderService.getEquipmentList$();
  private fullEquipmentList: Equipment[] = [];
  public filteredEquipment: Equipment[] = [];

  readonly selectedEquipment: Signal<SelectedEquipment> = computed(() => {
    const cat = this.category();
    return {
      light: cat === EquipmentType.Light,
      cameras: cat === EquipmentType.Cameras,
      other: cat === EquipmentType.Other
    }
  });

  ngOnInit() {
    this.category.set(this.activatedRoute.snapshot.paramMap.get('category') || '');
    this.equipment$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((equipments: Equipment[]) => {
        this.filteredEquipment = this.fullEquipmentList = equipments || [];
        this.filterEquipment(this.selectedEquipment())
      })
  }

  filterEquipment(selection: SelectedEquipment) {
    const selectedTypes: EquipmentType[] = [];
    if (selection.light) {
      selectedTypes.push(EquipmentType.Light);
    }
    if (selection.cameras) {
      selectedTypes.push(EquipmentType.Cameras);
    }
    if (selection.other) {
      selectedTypes.push(EquipmentType.Other);
      selectedTypes.push(EquipmentType.Empty);
    }

    if (selectedTypes.length === 0) {
      this.filteredEquipment = [...this.fullEquipmentList];
      return;
    }

    this.filteredEquipment = this.fullEquipmentList.filter(e =>
      selectedTypes.includes(e.type as EquipmentType)
    );

  }
}
