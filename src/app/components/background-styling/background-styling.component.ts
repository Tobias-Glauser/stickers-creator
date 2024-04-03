import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";
import {MatTooltip} from "@angular/material/tooltip";
import {ColorStyle} from "../../model/color";
import {StickerSizeService} from "../../sticker-size.service";
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-background-styling',
  standalone: true,
  imports: [
    FormsModule,
    MatAccordion,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatMenu,
    MatSlider,
    MatSliderThumb,
    MatTooltip,
    MatMenuTrigger,
    MatSlideToggle
  ],
  templateUrl: './background-styling.component.html',
  styleUrl: './background-styling.component.scss'
})
export class BackgroundStylingComponent {

  @Input() backgroundStyle: ColorStyle | undefined
  @Input() isImage: boolean = false

  constructor(
    public StickerSizeService: StickerSizeService
  ) {
  }

  displayWith(value: number) {
    return value.toString()
  }

  getCoverSize() {
    if (!this.backgroundStyle || !this.isImage) {
      return {x: this.StickerSizeService.getPixelSizeX(), y: this.StickerSizeService.getPixelSizeY()}
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.backgroundStyle.size.x
    let sizeY = this.backgroundStyle.size.y
    if (sizeX - stickerSizeX < sizeY - stickerSizeY) {
      return {
        x: stickerSizeY * (this.backgroundStyle.size.x/this.backgroundStyle.size.y),
        y: stickerSizeY
      }
    } else {
      return {
        x: stickerSizeX,
        y: stickerSizeX * (this.backgroundStyle.size.y/this.backgroundStyle.size.x)
      }
    }
  }

  updateCoverSize() {
    if (!this.backgroundStyle) {
      return
    }
    let newSizes = this.getCoverSize()
    this.backgroundStyle!.size.y = newSizes.y
    this.backgroundStyle!.size.x = newSizes.x
    this.backgroundStyle!.paddings.top = 0
    this.backgroundStyle!.paddings.left = 0
  }

  isCover(): boolean {
    if (!this.backgroundStyle) {
      return false
    }
    if (!this.isImage) {
      return this.backgroundStyle.size.x === this.StickerSizeService.getPixelSizeX() &&
        this.backgroundStyle.size.x === this.StickerSizeService.getPixelSizeY();
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.backgroundStyle.size.x
    let sizeY = this.backgroundStyle.size.y
    if (sizeX < sizeY && stickerSizeX === sizeX) {
      return true
    } else if (sizeY < sizeX && stickerSizeY === sizeY) {
      return true
    }
    return false
  }

  getContainSize() {
    if (!this.backgroundStyle) {
      return {x: 0, y:0}
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.backgroundStyle.size.x
    let sizeY = this.backgroundStyle.size.y
    if (sizeX - stickerSizeX > sizeY - stickerSizeY) {
      return {
        x: stickerSizeY * (this.backgroundStyle.size.x/this.backgroundStyle.size.y),
        y: stickerSizeY
      }
    } else {
      return {
        x: stickerSizeX,
        y: stickerSizeX * (this.backgroundStyle.size.y/this.backgroundStyle.size.x)
      }
    }
  }

  updateContainSize() {
    if (!this.backgroundStyle) {
      return
    }
    let newSizes = this.getContainSize()
    this.backgroundStyle!.size.y = newSizes.y
    this.backgroundStyle!.size.x = newSizes.x
    this.backgroundStyle!.paddings.top = 0
    this.backgroundStyle!.paddings.left = 0
  }

  isContain() {
    if (!this.backgroundStyle) {
      return false
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.backgroundStyle.size.x
    let sizeY = this.backgroundStyle.size.y
    if (sizeX > sizeY && stickerSizeX === sizeX) {
      return true
    } else if (sizeY > sizeX && stickerSizeY === sizeY) {
      return true
    }
    return false
  }

  onWidthChange(new_x: number, keepAspectRatio: boolean) {
    if (!this.backgroundStyle) {
      return
    }
    if (keepAspectRatio) {
      this.backgroundStyle.size.y = new_x * (this.backgroundStyle.size.y/this.backgroundStyle.size.x)
    }
    this.backgroundStyle.size.x = new_x
  }

  onHeightChange(new_y: number, keepAspectRatio: boolean) {
    console.log(this.backgroundStyle?.size.y, new_y, this.backgroundStyle?.size.x, keepAspectRatio)
    if (!this.backgroundStyle) {
      return
    }
    if (keepAspectRatio) {
      this.backgroundStyle.size.x = new_y * (this.backgroundStyle.size.x/this.backgroundStyle.size.y)
    }
    this.backgroundStyle.size.y = new_y
  }
}
