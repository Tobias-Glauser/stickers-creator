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
import {ImageStyle} from "../../model/image";

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

  @Input() style: ColorStyle | ImageStyle | undefined
  @Input() isImage: boolean = false
  @Input() isBackground: boolean = false

  constructor(
    public StickerSizeService: StickerSizeService
  ) {
  }

  ngOnInit() {
    console.log(this.style?.size)
  }

  displayWith(value: number) {
    return value.toString()
  }

  getContainSize() {
    if (!this.style || !this.isImage) {
      return {x: this.StickerSizeService.getPixelSizeX(), y: this.StickerSizeService.getPixelSizeY()}
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.style.size.x
    let sizeY = this.style.size.y
    if (sizeX - stickerSizeX < sizeY - stickerSizeY || sizeX - stickerSizeX > 0) {
      console.log('first')
      return {
        x: stickerSizeY * (this.style.size.x/this.style.size.y),
        y: stickerSizeY
      }
    } else {
      console.log('second')
      return {
        x: stickerSizeX,
        y: stickerSizeX * (this.style.size.y/this.style.size.x)
      }
    }
  }

  updateContainSize() {
    if (!this.style) {
      return
    }
    let newSizes = this.getContainSize()
    this.updateSizes(newSizes);
  }

  private updateSizes(newSizes: { x: number; y: number }) {
    if (this.style) {
      this.style.size.y = newSizes.y
      this.style.size.x = newSizes.x
      this.style.paddings.top = 0
      this.style.paddings.left = 0
      this.style.paddings.bottom = 0
      this.style.paddings.right = 0
    }
  }

  isContain(): boolean {
    if (!this.style) {
      return false
    }
    if (!this.isImage) {
      return this.style.size.x === this.StickerSizeService.getPixelSizeX() &&
        this.style.size.x === this.StickerSizeService.getPixelSizeY();
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.style.size.x
    let sizeY = this.style.size.y

    return (sizeX < sizeY && stickerSizeX === sizeX) || (sizeY < sizeX && stickerSizeY === sizeY)
  }

  getCoverSize() {
    if (!this.style) {
      return {x: 0, y:0}
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.style.size.x
    let sizeY = this.style.size.y
    if (sizeX - stickerSizeX > sizeY - stickerSizeY && sizeX - stickerSizeX < 0) {
      console.log('first',sizeX, stickerSizeX, sizeX - stickerSizeX, sizeY, stickerSizeY, sizeY - stickerSizeY, sizeX - stickerSizeX > sizeY - stickerSizeY)
      return {
        x: stickerSizeY * (this.style.size.x/this.style.size.y),
        y: stickerSizeY
      }
    } else {
      console.log('second',sizeX, stickerSizeX, sizeX - stickerSizeX, sizeY, stickerSizeY, sizeY - stickerSizeY, sizeX - stickerSizeX > sizeY - stickerSizeY)
      return {
        x: stickerSizeX,
        y: stickerSizeX * (this.style.size.y/this.style.size.x)
      }
    }
  }

  updateCoverSize() {
    if (!this.style) {
      return
    }
    let newSizes = this.getCoverSize()
    this.updateSizes(newSizes)
  }

  isCover() {
    if (!this.style) {
      return false
    }
    let stickerSizeY = this.StickerSizeService.getPixelSizeY()
    let stickerSizeX = this.StickerSizeService.getPixelSizeX()
    let sizeX = this.style.size.x
    let sizeY = this.style.size.y

    return (sizeX > sizeY && stickerSizeX === sizeX) || (sizeY > sizeX && stickerSizeY === sizeY)
  }

  onWidthChange(new_x: number, keepAspectRatio: boolean) {
    if (!this.style) {
      return
    }
    if (keepAspectRatio) {
      this.style.size.y = new_x * (this.style.size.y/this.style.size.x)
    }
    this.style.size.x = new_x
  }

  onHeightChange(new_y: number, keepAspectRatio: boolean) {
    console.log(this.style?.size.y, new_y, this.style?.size.x, keepAspectRatio)
    if (!this.style) {
      return
    }
    if (keepAspectRatio) {
      this.style.size.x = new_y * (this.style.size.x/this.style.size.y)
    }
    this.style.size.y = new_y
  }
}
