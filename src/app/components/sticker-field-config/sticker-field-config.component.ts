import {Component, Input, OnInit} from '@angular/core';
import {GeneralStickerConfigsComponent} from "../general-sticker-configs/general-sticker-configs.component";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatTooltip} from "@angular/material/tooltip";
import {NgForOf, NgIf} from "@angular/common";
import {StickerFieldDesign} from "../../model/sticker-field-design";
import {FontService} from "../../font.service";
import {NgxColorsModule} from "ngx-colors";

@Component({
  selector: 'app-sticker-field-config',
  standalone: true,
  imports: [
    GeneralStickerConfigsComponent,
    MatIcon,
    MatMenu,
    MatMiniFabButton,
    MatMenuTrigger,
    FormsModule,
    MatAccordion,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatTooltip,
    NgForOf,
    NgxColorsModule,
    NgIf,
    MatIconButton
  ],
  templateUrl: './sticker-field-config.component.html',
  styleUrl: './sticker-field-config.component.scss'
})
export class StickerFieldConfigComponent implements OnInit {

  @Input({required: true}) design: StickerFieldDesign | undefined
  @Input() disableHorizontalAlignment: boolean = false
  @Input() disableVerticalAlignment: boolean = false

  fontList: string[] = []

  constructor(
    private FontService: FontService
  ) {
  }

  ngOnInit() {
    this.fontList = this.FontService.getFontsList()
  }
}
