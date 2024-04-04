import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatDivider} from "@angular/material/divider";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {SelectField} from "../../model/select-field";
import {TextField} from "../../model/text-field";
import {DateField} from "../../model/date-field";
import {NumberField} from '../../model/number-field';
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
import {GeneralStickerConfigsComponent} from "../general-sticker-configs/general-sticker-configs.component";
import {Sticker} from "../../model/sticker";
import {StickerFieldDesign} from "../../model/sticker-field-design";
import {Color} from "../../model/color";
import {Image} from "../../model/image";
import {ColorConfigsComponent} from "../color-configs/color-configs.component";
import {ImageConfigComponent} from "../image-config/image-config.component";
import {StickerSizeService} from "../../sticker-size.service";
import {StickerFieldConfigsComponent} from "../sticker-field-configs/sticker-field-configs.component";

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
    CdkScrollable,
    MatExpansionPanelTitle,
    GeneralStickerConfigsComponent,
    ColorConfigsComponent,
    ImageConfigComponent,
    StickerFieldConfigsComponent
  ],
  templateUrl: './sticker-creator.component.html',
  styleUrl: './sticker-creator.component.scss'
})
export class StickerCreatorComponent {

  @Input() sticker: Sticker = {
    name: 'Sticker sans nom',
    size: {
      size_x: 21.0,
      size_y: 29.7,
      horizontal_number: 3,
      vertical_number: 8
    },
    global_design: {
      paddings: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      text: {
        bold: false,
        underline: false,
        italic: false,
        police: {
          name: 'Helvetica',
          size: 17,
          color: ''
        },
        horizontal_alignment: 'left',
        vertical_alignment: 'flex-start',
      },
      backgrounds: []
    },
    fields: []
  }

  defaultFieldDesign: StickerFieldDesign = {
    paddings: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    background: '',
    text: {
      bold: false,
      italic: false,
      underline: false,
      inherit: true,
      vertical_alignment: 'baseline',
      horizontal_alignment: 'inherit',
      police: {
        name: null,
        size: 0,
        color: ''
      }
    }
  }

  defaultImage: Image = {
    discriminator: 'image',
    background: true,
    name: "Pas d'image",
    type: '',
    file: '',
    style: {
      paddings: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      size: {
        x: 0,
        y: 0,
      }
    }
  }

  defaultColor: Color = {
    discriminator: 'color',
    background: true,
    name: 'sans nom',
    value: '',
    style: {
      paddings: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
      size: {
        x: 400,
        y: 400,
      }
    }
  }

  constructor(
    private StickerSizeService: StickerSizeService
  ) {
  }

  ngOnInit() {
    this.StickerSizeService.setSize(this.sticker.size)
  }

  addItem(selection: string) {
    let infos: FieldCommonConfigs = {
      name: 'sans nom',
      preffix: {
        discriminator: 'prefix',
        name: '',
        inlined: true,
        design: structuredClone(this.defaultFieldDesign)
      },
      suffix: {
        discriminator: 'suffix',
        name: '',
        inlined: true,
        design: structuredClone(this.defaultFieldDesign)
      },
      design: structuredClone(this.defaultFieldDesign)
    }

    switch (selection) {
      case 'select': {
        this.sticker.fields.push({
          discriminator: 'select',
          common_configs: infos,
          options: [],
          value: null
        } as SelectField)
        break
      }
      case 'number': {
        this.sticker.fields.push({
          discriminator: 'number',
          common_configs: infos,
          value: null
        } as NumberField)
        break
      }
      case 'date': {
        this.sticker.fields.push({
          discriminator: 'date',
          common_configs: infos,
          value: null
        } as DateField)
        break
      }
      case 'text': {
        this.sticker.fields.push({
          discriminator: 'text',
          common_configs: infos,
          value: null
        } as TextField)
        break
      }
      case 'image': {
        break
      }
      case 'color': {
        break
      }
    }
  }

  addBackground(selection: string) {
    if (selection === 'color') {
      this.sticker.global_design.backgrounds.push(structuredClone(this.defaultColor))
    } else {
      this.sticker.global_design.backgrounds.push(structuredClone(this.defaultImage))
    }
  }

  dropBackground(event: CdkDragDrop<(Color | Image)[]>) {
    moveItemInArray(this.sticker.global_design.backgrounds, event.previousIndex, event.currentIndex);
  }

  dropItem(event: CdkDragDrop<(SelectField | TextField | DateField | NumberField)[]>) {
    moveItemInArray(this.sticker.fields, event.previousIndex, event.currentIndex);
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

  removeField(field: SelectField | TextField | DateField | NumberField) {
    this.sticker.fields = this.sticker.fields.filter((currentField) => currentField !== field)
  }

  removeBackground(field: Color | Image) {
    this.sticker.global_design.backgrounds = this.sticker.global_design.backgrounds.filter((currentField) => currentField !== field)
  }
}
