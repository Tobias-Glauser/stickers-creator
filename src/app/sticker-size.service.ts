import {Injectable} from '@angular/core';
import {Size} from "./model/size";

@Injectable({
  providedIn: 'root'
})
export class StickerSizeService {

  size: Size | null = null
  pixelFactor: number = 37.795

  constructor() { }

  setSize(size: Size) {
    this.size = size
  }

  getSize() {
    return this.size
  }

  getPixelSizeX() {
    if (this.size) {
      return Math.round(this.size.size_x / this.size.horizontal_number * this.pixelFactor)
    } else {
      return 0
    }
  }

  getPixelSizeY() {
    if (this.size) {
      return Math.round(this.size.size_y / this.size.vertical_number * this.pixelFactor)
    } else {
      return 0
    }
  }
}
