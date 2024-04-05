import {Component, Input} from '@angular/core';
import {Color} from "../../model/color";
import {Image} from "../../model/image";
import {StickerService} from "../../sticker.service";

@Component({
  selector: 'app-sticker-asset',
  standalone: true,
  imports: [],
  templateUrl: './sticker-asset.component.html',
  styleUrl: './sticker-asset.component.scss'
})
export class StickerAssetComponent {

  @Input({required: true}) asset: Color | Image | undefined

  constructor(
    protected StickerService: StickerService
  ) {
  }

  getBackground() {
    if (!this.asset) {
      return ''
    }

    let style = {
      'background': 'content-box center/contain '
    }
    if (this.asset.discriminator === 'image') {
      if (this.asset.file !== '') {
        console.log(this.asset.file)
        style.background += "url('" + this.asset.file + "')"
      } else {
        style.background += 'unset'
      }

    } else {
      style.background += this.asset.value
    }
    console.log(style)
    return style
  }
}
