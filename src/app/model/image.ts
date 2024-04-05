import {Paddings} from "./paddings";

export interface Image {
  discriminator: 'image',
  background: boolean,
  name: string,
  type: string,
  file: string,
  style: ImageStyle
}

export interface ImageStyle {
  paddings: Paddings
  size: {
    x: number,
    y: number
  },
  position: string
}
