import {SelectField} from "./select-field";
import {TextField} from "./text-field";
import {DateField} from "./date-field";
import {NumberField} from "./number-field";
import {Paddings} from "./paddings";
import {Image} from "./image";
import {Color} from "./color";
import {Size} from "./size";

export interface Sticker {
  size: Size,
  name: string,
  global_design: GlobalStickerDesign
  fields: (SelectField | TextField | DateField | NumberField)[]
}

export interface PoliceConfig {
  name: string,
  size: number,
  color: string
}

export interface TextConfig {
  bold: boolean,
  underline: boolean,
  italic: boolean,
  horizontal_alignment: string
  vertical_alignment: string
  police: PoliceConfig
}

export interface GlobalStickerDesign {
  paddings: Paddings,
  text: TextConfig,
  backgrounds: (Image | Color)[]
}
