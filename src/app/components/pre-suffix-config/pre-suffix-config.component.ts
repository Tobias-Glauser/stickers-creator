import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatExpansionPanelHeader} from "@angular/material/expansion";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {PreSuffix} from "../../model/pre-suffix";
import {NgIf} from "@angular/common";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatMiniFabButton} from "@angular/material/button";
import {GeneralStickerConfigsComponent} from "../general-sticker-configs/general-sticker-configs.component";
import {StickerFieldConfigComponent} from "../sticker-field-config/sticker-field-config.component";

@Component({
  selector: 'app-pre-suffix-config',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckbox,
    MatExpansionPanelHeader,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    MatButtonToggle,
    MatIcon,
    MatTooltip,
    MatMenu,
    MatMenuItem,
    MatMiniFabButton,
    MatMenuTrigger,
    GeneralStickerConfigsComponent,
    StickerFieldConfigComponent
  ],
  templateUrl: './pre-suffix-config.component.html',
  styleUrl: './pre-suffix-config.component.scss'
})
export class PreSuffixConfigComponent {

  @Input({required: true}) presuffix: PreSuffix | undefined

  getType() {
    if (this.presuffix !== undefined) {
      return this.presuffix.discriminator === 'prefix' ? 'Préfixe' : 'Suffixe'
    } else {
      return ''
    }
  }
}
