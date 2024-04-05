import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {StickerFieldStylingComponent} from "../sticker-field-styling/sticker-field-styling.component";
import {AssetStylingComponent} from "../asset-styling/asset-styling.component";
import {NgxColorsModule} from "ngx-colors";
import {MatTooltip} from "@angular/material/tooltip";
import {Color} from "../../model/color";

@Component({
  selector: 'app-color-configs',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    StickerFieldStylingComponent,
    AssetStylingComponent,
    NgxColorsModule,
    MatTooltip
  ],
  templateUrl: './color-configs.component.html',
  styleUrl: './color-configs.component.scss'
})
export class ColorConfigsComponent {

  @Input({required: true}) color: Color | undefined

}
