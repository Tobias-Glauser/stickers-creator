import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {ImageService} from "../../image.service";
import {Image} from "../../model/image";
import {NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {ImageStylingComponent} from "../image-styling/image-styling.component";

@Component({
  selector: 'app-image-config',
  standalone: true,
  imports: [
    MatButton,
    NgIf,
    MatIconButton,
    MatIcon,
    ImageStylingComponent
  ],
  templateUrl: './image-config.component.html',
  styleUrl: './image-config.component.scss'
})
export class ImageConfigComponent {

  @Input() image: Image | null = null
  @Input() background: boolean = false
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
    this.image = null
    this.imageChange.emit(this.image)
  }
}
