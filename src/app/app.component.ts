import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StickerCreatorComponent} from "./components/sticker-creator/sticker-creator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StickerCreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stickers-creator';
}
