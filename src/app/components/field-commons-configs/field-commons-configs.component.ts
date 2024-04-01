import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FieldCommonConfigs} from "../../model/field-common-configs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-field-commons-configs',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf
  ],
  templateUrl: './field-commons-configs.component.html',
  styleUrl: './field-commons-configs.component.scss'
})
export class FieldCommonsConfigsComponent {

  @Input({required: true}) field: FieldCommonConfigs | undefined
}
