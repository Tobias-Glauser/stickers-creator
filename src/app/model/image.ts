import {Paddings} from "./paddings";

export interface Image {
  discriminator: 'image',
  name: string,
  type: string,
  file: string
  style: ImageStyle
}

export interface ImageStyle {
  paddings: {
    top: number,
    left: number,
  }
  size: {
    x: number,
    y: number
  }
}
