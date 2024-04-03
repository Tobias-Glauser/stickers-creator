import {Component, Input, OnInit} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {StickerService} from "../../sticker.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {Sticker} from "../../model/sticker";
import {FormsModule} from "@angular/forms";
import {NgxColorsModule, NgxColorsTriggerDirective} from "ngx-colors";

@Component({
  selector: 'app-general-sticker-configs',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatGridList,
    MatGridTile,
    MatFormField,
    MatLabel,
    MatInput,
    MatSuffix,
    MatAccordion,
    MatSelect,
    MatOption,
    NgForOf,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon,
    MatTooltip,
    NgIf,
    FormsModule,
    NgxColorsModule
  ],
  templateUrl: './general-sticker-configs.component.html',
  styleUrl: './general-sticker-configs.component.scss'
})
export class GeneralStickerConfigsComponent implements OnInit {

  @Input() sticker: Sticker | undefined

  fontList: string[] = []

  constructor(
    private FontService: StickerService
  ) {
  }

  ngOnInit() {
    this.fontList = this.FontService.getFontsList()
  }

  protected readonly console = console
}
