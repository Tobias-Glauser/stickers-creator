import {Paddings} from "./paddings";

export interface Color {
  discriminator: 'color',
  background: boolean,
  name: string,
  value: string,
  style: ColorStyle
}

export interface ColorStyle {
  paddings: Paddings
  size: {
    x: number,
    y: number
  },
  position: string
}
