import {Routes} from '@angular/router';
import {StickerCreatorComponent} from "./components/sticker-creator/sticker-creator.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {StickerGeneratorComponent} from "./components/sticker-generator/sticker-generator.component";
import {AllStickersComponent} from "./components/all-stickers/all-stickers.component";

export const routes: Routes = [
  {path: '', redirectTo: 'creation', pathMatch: 'full'},
  {path: 'creation', component: StickerCreatorComponent},
  {path: 'generation', component: StickerGeneratorComponent},
  {path: 'all-stickers', component: AllStickersComponent},
  {path: '**', component: NotFoundComponent},
];
