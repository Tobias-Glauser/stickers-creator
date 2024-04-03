import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {StickerFieldConfigComponent} from "../sticker-field-config/sticker-field-config.component";
import {BackgroundStylingComponent} from "../background-styling/background-styling.component";
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
    StickerFieldConfigComponent,
    BackgroundStylingComponent,
    NgxColorsModule,
    MatTooltip
  ],
  templateUrl: './color-configs.component.html',
  styleUrl: './color-configs.component.scss'
})
export class ColorConfigsComponent {

  @Input({required: true}) color: Color | undefined
}
