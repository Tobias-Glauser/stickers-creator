import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {Sticker} from "../../model/sticker";
import {StickerService} from "../../sticker.service";
import {StickerFieldComponent} from "../sticker-field/sticker-field.component";

@Component({
  selector: 'app-sticker',
  standalone: true,
  imports: [
    NgIf,
    StickerFieldComponent
  ],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.scss'
})
export class StickerComponent {
  @Input({required: true}) sticker: Sticker | undefined
  @Input() generation: boolean = false


  constructor(
    public StickerService: StickerService
  ) {
  }

  getImageUrlProperty(imageData: string) {
    return "url('" + imageData + "')"
  }
}
