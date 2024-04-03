import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "./model/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  getImage(file: File, image: Image | null = null) {
    return new Observable<Image>((observer) => {
      this.getBase64(file).then((res) => {
        console.log(res)
        if (!image) {
          observer.next({
            discriminator: 'image',
            name: file.name,
            type: file.type,
            file: res as string,
            style: {
              paddings: {
                top: 0,
                left: 0,
              },
              size: {
                x: 0,
                y: 0
              }
            }
          })
        } else {
          image.name = file.name
          image.type = file.type
          image.file = res as string
        }
      })
    })
  }
}
