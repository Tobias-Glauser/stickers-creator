import {SelectField} from "./select-field";
import {TextField} from "./text-field";
import {DateField} from "./date-field";
import {NumberField} from "./number-field";

export interface Sticker {
  name: string,
  paddings: Paddings
  background_image: null | string
  fields: (SelectField | TextField | DateField | NumberField)[]
}

export interface Paddings {
  left: number,
  right: number,
  top: number,
  bottom: number
}
