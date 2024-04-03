import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {TextField} from "../../model/text-field";
import {NumberField} from "../../model/number-field";
import {SelectField} from "../../model/select-field";
import {DateField} from "../../model/date-field";
import {Sticker} from "../../model/sticker";
import {StickerService} from "../../sticker.service";

@Component({
  selector: 'app-sticker-field',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './sticker-field.component.html',
  styleUrl: './sticker-field.component.scss'
})
export class StickerFieldComponent {

  @Input({required: true}) stickerField: TextField | NumberField | SelectField | DateField | undefined
  @Input({required: true}) sticker: Sticker | undefined
  @Input() generation: boolean = false

  constructor(
    public StickerService: StickerService
  ) {
  }
}
