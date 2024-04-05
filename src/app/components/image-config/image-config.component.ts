import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {ImageService} from "../../image.service";
import {Image} from "../../model/image";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ImageStylingComponent} from "../image-styling/image-styling.component";
import {AssetStylingComponent} from "../asset-styling/asset-styling.component";

@Component({
  selector: 'app-image-config',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatIconButton,
    MatIcon,
    ImageStylingComponent,
    AssetStylingComponent
  ],
  templateUrl: './image-config.component.html',
  styleUrl: './image-config.component.scss'
})
export class ImageConfigComponent {

  @Input() image: Image | null = null
  @Output() imageChange = new EventEmitter<Image | null>()

  constructor(
    private ImageService: ImageService
  ) {
  }

  onImageChange(event: any) {
    console.log(event.target.files[0])
    this.ImageService.getImage(event.target.files[0], this.image).subscribe((res) => {
      if (!this.image) {
        this.image = res
      }
      this.imageChange.emit(this.image)
      console.log(this.image)
    })
  }

  onImageRemove() {
    if (this.image) {
      this.image.file = ''
      this.image.name = ''
      this.image.type = ''
    }
    this.imageChange.emit(this.image)
  }
}
