import { Injectable } from '@angular/core';
import {Paddings} from "./model/paddings";
import {DateField} from "./model/date-field";
import {NumberField} from "./model/number-field";
import {TextField} from "./model/text-field";
import {SelectField} from "./model/select-field";

@Injectable({
  providedIn: 'root'
})
export class StickerService {

  constructor() { }

  fontList: string[] = [
    "Arial",
    "Arial Black",
    "Arial Narrow",
    "Arial Rounded MT Bold",
    "Avant Garde",
    "Calibri",
    "Candara",
    "Century Gothic",
    "Franklin Gothic Medium",
    "Futura",
    "Geneva",
    "Gill Sans",
    "Helvetica",
    "Impact",
    "Lucida Grande",
    "Optima",
    "Segoe UI",
    "Tahoma",
    "Trebuchet MS",
    "Verdana",
    "Big Caslon",
    "Bodoni MT",
    "Book Antiqua",
    "Calisto MT",
    "Cambria",
    "Didot",
    "Garamond",
    "Georgia",
    "Goudy Old Style",
    "Hoefler Text",
    "Lucida Bright",
    "Palatino",
    "Perpetua",
    "Rockwell",
    "Rockwell Extra Bold",
    "Baskerville",
    "Times New Roman",
    "Consolas",
    "Courier New",
    "Lucida Console",
    "Lucida Sans Typewriter",
    "Monaco",
    "Andale Mono",
    "Copperplate",
    "Papyrus",
    "Brush Script MT"
  ]

  getFontsList() {
    return this.fontList.sort()
  }

  getPaddings(paddings: Paddings) {
    return paddings.top + 'px ' + paddings.right + 'px ' + paddings.bottom + 'px ' + paddings.left + 'px '
  }

  getFieldText(field: DateField | NumberField | TextField | SelectField, generation: boolean) {
    switch (field.discriminator) {
      case "text":
        return field.value || (generation ? '' : field.common_configs.name)
      case "number":
        return field.value?.toString() || (generation ? '' : field.common_configs.name)
      case "date":
        return field.value?.toLocaleDateString() || (generation ? '' : field.common_configs.name)
      case "select":
        return field.value?.name || (generation ? '' : field.common_configs.name)
    }
  }
}
