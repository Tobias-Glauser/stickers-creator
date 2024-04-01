import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {TextField} from "../../model/text-field";
import {NumberField} from "../../model/number-field";
import {DateField} from "../../model/date-field";
import {SelectField} from "../../model/select-field";

@Component({
  selector: 'app-sticker-generation-form',
  standalone: true,
    imports: [
        FormsModule,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatFormField,
        MatHint,
        MatInput,
        MatLabel,
        MatOption,
        MatSelect,
        MatSuffix,
        NgForOf,
        NgIf
    ],
  templateUrl: './sticker-generation-form.component.html',
  styleUrl: './sticker-generation-form.component.scss'
})
export class StickerGenerationFormComponent {

  @Input({required: true}) sticker: (TextField | NumberField | DateField | SelectField)[] = []
}
