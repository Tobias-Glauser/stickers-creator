import {Paddings} from "./paddings";
import {ImageStyle} from "./image";

export interface Color {
  discriminator: 'color',
  name: string,
  value: string,
  style: ColorStyle,
}

export interface ColorStyle {
  paddings: {
    top: number,
    left: number,
  }
  size: {
    x: number,
    y: number
  }
}
