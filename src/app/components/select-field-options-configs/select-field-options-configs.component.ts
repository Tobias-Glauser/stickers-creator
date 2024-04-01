import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {NgForOf} from "@angular/common";
import {SelectFieldOption} from "../../model/select-field-option";

@Component({
  selector: 'app-select-field-options-configs',
  standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatIcon,
        MatIconButton,
        MatInput,
        MatLabel,
        MatMiniFabButton,
        NgForOf
    ],
  templateUrl: './select-field-options-configs.component.html',
  styleUrl: './select-field-options-configs.component.scss'
})
export class SelectFieldOptionsConfigsComponent {

  @Input({required: true}) options: SelectFieldOption[] = []

  removeOption(option: SelectFieldOption) {
    this.options = this.options.filter((currentOption) => currentOption !== option)
  }

  addOption() {
    this.options.push({
      name: 'sans nom'
    })
  }
}
