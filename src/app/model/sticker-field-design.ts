import {Paddings} from "./paddings";

export interface FieldTextConfig {
  bold: boolean,
  italic: boolean,
  underline: boolean,
  inherit: boolean,
  horizontal_alignment: string,
  vertical_alignment: string,
  police: PoliceConfig
}

export interface PoliceConfig {
  name: string | null,
  size: number,
  color: ''
}

export interface StickerFieldDesign {
  paddings: Paddings,
  text: FieldTextConfig,
  background: ''
}
