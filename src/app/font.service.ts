import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontService {

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
}
