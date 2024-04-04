import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Image} from "./model/image";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImageBase64(file: File) {
    return new Promise<{x: number, y: number, file: string}>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let img = new Image

        img.src = reader.result as string

        img.onload = () => {
          resolve({x: img.width, y: img.height, file: reader.result as string})
        }
        img.onerror = error => reject(error)
      }
      reader.onerror = error => reject(error);
    })
  }

  getImage(file: File, image: Image | null = null) {
    return new Observable<Image>((observer) => {
      this.getImageBase64(file).then((res) => {
        console.log(res)
        if (!image) {
          observer.next({
            discriminator: 'image',
            background: true,
            name: file.name,
            type: file.type,
            file: res.file,
            style: {
              paddings: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              },
              size: {
                x: res.x,
                y: res.y
              }
            }
          })
        } else {
          image.name = file.name
          image.type = file.type
          image.style.size.x = res.x
          image.style.size.y = res.y
          image.file = res.file
        }
      })
    })
  }
}
