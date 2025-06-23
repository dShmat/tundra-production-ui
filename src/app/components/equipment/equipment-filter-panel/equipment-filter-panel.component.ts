import {Component, effect, inject, input, OnInit, output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {SelectedEquipment} from '../../../models/equipment.model';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'ts-equipment-filter-panel',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './equipment-filter-panel.component.html',
  styleUrl: './equipment-filter-panel.component.scss'
})
export class EquipmentFilterPanelComponent implements OnInit {

  initSelectedEquipment = input.required<SelectedEquipment>()
  filteredEquipment = output<SelectedEquipment>();

  private fb: FormBuilder = inject(FormBuilder);

  equipmentFilterForm: FormGroup = this.fb.group({
    light: [false],
    cameras: [false],
    other: [false]
  });

  readonly formValue = toSignal(
    this.equipmentFilterForm.valueChanges,
    {initialValue: this.equipmentFilterForm.value}
  );

  constructor() {
    effect(() => {
      let value = this.formValue();
      this.filteredEquipment.emit(value);
    });

  }

  ngOnInit() {
    this.equipmentFilterForm.setValue(this.initSelectedEquipment());
  }


}
