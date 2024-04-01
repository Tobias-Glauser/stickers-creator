import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {TextField} from "../../model/text-field";
import {NumberField} from "../../model/number-field";
import {DateField} from "../../model/date-field";
import {SelectField} from "../../model/select-field";

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
  @Input({required: true}) sticker: (TextField | NumberField | DateField | SelectField)[] = []

  getDate(date: Date | null) {
    if (date === null) {
      return null
    }
    return date.toLocaleDateString()
  }
}
