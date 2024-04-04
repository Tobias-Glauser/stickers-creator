import {Component, Input} from '@angular/core';
import {FieldCommonsConfigsComponent} from "../field-commons-configs/field-commons-configs.component";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";
import {NgIf} from "@angular/common";
import {PreSuffixConfigComponent} from "../pre-suffix-config/pre-suffix-config.component";
import {
  SelectFieldOptionsConfigsComponent
} from "../select-field-options-configs/select-field-options-configs.component";
import {SelectField} from "../../model/select-field";
import {NumberField} from "../../model/number-field";
import {DateField} from "../../model/date-field";
import {TextField} from "../../model/text-field";

@Component({
  selector: 'app-sticker-field-configs',
  standalone: true,
  imports: [
    FieldCommonsConfigsComponent,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    NgIf,
    PreSuffixConfigComponent,
    SelectFieldOptionsConfigsComponent
  ],
  templateUrl: './sticker-field-configs.component.html',
  styleUrl: './sticker-field-configs.component.scss'
})
export class StickerFieldConfigsComponent {
  @Input({required: true})  element: SelectField | NumberField | DateField | TextField | undefined
}
