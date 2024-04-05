import {Component, Input} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {NgIf} from "@angular/common";
import {FieldCommonConfigs} from "../../model/field-common-configs";
import {Image, ImageStyle} from "../../model/image";
import {Color, ColorStyle} from "../../model/color";
import {StickerFieldDesign} from "../../model/sticker-field-design";

@Component({
  selector: 'app-choose-position',
  standalone: true,
  imports: [
    MatButtonToggle,
    MatButtonToggleGroup,
    MatIcon,
    MatTooltip,
    NgIf
  ],
  templateUrl: './choose-position.component.html',
  styleUrl: './choose-position.component.scss'
})
export class ChoosePositionComponent {

  @Input({required: true}) element: StickerFieldDesign | ColorStyle | ImageStyle | undefined
}
