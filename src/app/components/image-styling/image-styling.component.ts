import {Component, Input} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatTooltip} from "@angular/material/tooltip";
import {NgForOf, NgIf} from "@angular/common";
import {NgxColorsModule} from "ngx-colors";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImageStyle} from "../../model/image";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";

@Component({
  selector: 'app-image-styling',
  standalone: true,
  imports: [
    MatAccordion,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatMenu,
    MatOption,
    MatSelect,
    MatTooltip,
    NgForOf,
    NgIf,
    NgxColorsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlider,
    MatSliderThumb,
    MatMenuTrigger
  ],
  templateUrl: './image-styling.component.html',
  styleUrl: './image-styling.component.scss'
})
export class ImageStylingComponent {

  @Input({required: true}) imageStyle: ImageStyle | undefined
  @Input() sizingEnabled: boolean = false
}
