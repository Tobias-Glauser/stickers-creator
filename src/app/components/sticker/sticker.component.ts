import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {TextField} from "../../model/text-field";
import {NumberField} from "../../model/number-field";
import {DateField} from "../../model/date-field";
import {SelectField} from "../../model/select-field";
import {Sticker} from "../../model/sticker";
import {Paddings} from "../../model/paddings";

@Component({
  selector: 'app-sticker',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.scss'
})
export class StickerComponent {
  @Input({required: true}) sticker: Sticker | undefined
  @Input() generation: boolean = false

  getPaddings(paddings: Paddings) {
    return paddings.top + 'px ' + paddings.right + 'px ' + paddings.bottom + 'px ' + paddings.left + 'px '
  }

  getFieldText(field: DateField | NumberField | TextField | SelectField) {
    switch (field.discriminator) {
      case "text":
        return field.value || (this.generation ? '' : field.common_configs.name)
      case "number":
        return field.value?.toString() || (this.generation ? '' : field.common_configs.name)
      case "date":
        return field.value?.toLocaleDateString() || (this.generation ? '' : field.common_configs.name)
      case "select":
        return field.value?.name || (this.generation ? '' : field.common_configs.name)
    }
  }
}
