import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {Sticker} from "../../model/sticker";
import {StickerService} from "../../sticker.service";
import {StickerFieldComponent} from "../sticker-field/sticker-field.component";
import {StickerSizeService} from "../../sticker-size.service";
import {StickerAssetComponent} from "../sticker-asset/sticker-asset.component";

@Component({
  selector: 'app-sticker',
  standalone: true,
  imports: [
    NgIf,
    StickerFieldComponent,
    StickerAssetComponent
  ],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.scss'
})
export class StickerComponent {
  @Input({required: true}) sticker: Sticker | undefined
  @Input() generation: boolean = false


  constructor(
    public StickerService: StickerService,
    public StickerSizeService: StickerSizeService
  ) {
  }

  getImageUrlProperty(imageData: string) {
    return "url('" + imageData + "')"
  }

  getBackgroundAssetsStyle() {
    if (!this.sticker) {
      return ''
    }

    let style = {
      'background': ''
    }
    for (let background of this.sticker.global_design.backgrounds) {
      if (style.background.length > 0) {
        style.background += ', '
      }

      if (background.discriminator === 'image') {
        style.background += 'no-repeat top ' + background.style.paddings.top + 'px left ' + background.style.paddings.left
        style.background += 'px/' + background.style.size.x + 'px ' + background.style.size.y + 'px '
        style.background += "url('" + background.file + "')"
      } else {
        style.background += 'linear-gradient(' + background.value + ', ' + background.value + ') top ' + background.style.paddings.top + 'px left ' + background.style.paddings.left + 'px / '+ background.style.size.x +'px '+ background.style.size.y + 'px no-repeat'
      }
    }
    return style
  }
}
