import {StickerFieldDesign} from "./sticker-field-design";

export interface PreSuffix {
  discriminator: 'prefix' | 'suffix',
  name: string,
  inlined: boolean,
  design: StickerFieldDesign
}
