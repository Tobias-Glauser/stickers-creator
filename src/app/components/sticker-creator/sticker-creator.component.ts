import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatCard, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader} from "@angular/material/expansion";
import {MatDivider} from "@angular/material/divider";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {SelectField} from "../../model/select-field";
import {TextField} from "../../model/text-field";
import {DateField} from "../../model/date-field";
import { NumberField } from '../../model/number-field';
import {FieldCommonConfigs} from "../../model/field-common-configs";
import {PreSuffixConfigComponent} from "../pre-suffix-config/pre-suffix-config.component";
import {FieldCommonsConfigsComponent} from "../field-commons-configs/field-commons-configs.component";
import {
  SelectFieldOptionsConfigsComponent
} from "../select-field-options-configs/select-field-options-configs.component";
import {StickerGenerationFormComponent} from "../sticker-generation-form/sticker-generation-form.component";
import {StickerComponent} from "../sticker/sticker.component";
import {CdkDrag, CdkDragDrop, CdkDragHandle, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";
import {CdkScrollable} from "@angular/cdk/overlay";

@Component({
  selector: 'app-sticker-creator',
  standalone: true,
  imports: [
    MatIcon,
    MatMiniFabButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatButton,
    NgForOf,
    MatFormField,
    MatInput,
    FormsModule,
    MatCheckbox,
    NgIf,
    MatLabel,
    MatCardModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatAccordion,
    MatIconButton,
    MatDivider,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatHint,
    MatNativeDateModule,
    MatOption,
    MatSelect,
    MatInputModule,
    MatFormFieldModule,
    PreSuffixConfigComponent,
    FieldCommonsConfigsComponent,
    SelectFieldOptionsConfigsComponent,
    StickerGenerationFormComponent,
    StickerComponent,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    CdkScrollable
  ],
  templateUrl: './sticker-creator.component.html',
  styleUrl: './sticker-creator.component.scss'
})
export class StickerCreatorComponent {

  elements: (SelectField | TextField | DateField | NumberField)[] = []

  addItem(selection: string) {
    let infos: FieldCommonConfigs = {
      name: 'sans nom',
      preffix: {
        discriminator: 'prefix',
        name: '',
        inlined: true
      },
      suffix: {
        discriminator: 'suffix',
        name: '',
        inlined: true
      }
    }

    switch (selection) {
      case 'select': {
        this.elements.push({
          discriminator: 'select',
          common_configs: infos,
          options: [],
          value: null
        } as SelectField)
        break
      }
      case 'number': {
        this.elements.push({
          discriminator: 'number',
          common_configs: infos,
          value: null
        } as NumberField)
        break
      }
      case 'date': {
        this.elements.push({
          discriminator: 'date',
          common_configs: infos,
          value: null
        } as DateField)
        break
      }
      default: {
        this.elements.push({
          discriminator: 'text',
          common_configs: infos,
          value: null
        } as TextField)
      }
    }
  }

  drop(event: CdkDragDrop<(SelectField | TextField | DateField | NumberField)[]>) {
    moveItemInArray(this.elements, event.previousIndex, event.currentIndex);
  }

  protected readonly structuredClone = structuredClone;

  getFieldType(discriminator: "text" | "select" | "date" | "number") {
    switch (discriminator) {
      case "select":
        return 'Sélection'
      case "date":
        return 'Date';
      case "number":
        return 'Nombre'
      case "text":
        return 'Texte'
    }
  }

  getIconForFieldType(discriminator: "text" | "select" | "date" | "number") {
    switch (discriminator) {
      case "select":
        return 'fact_check'
      case "date":
        return 'calendar_today';
      case "number":
        return 'pin'
      case "text":
        return 'keyboard'
    }
  }
}
