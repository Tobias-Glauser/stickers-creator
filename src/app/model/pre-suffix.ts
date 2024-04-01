export interface PreSuffix {
  discriminator: 'prefix' | 'suffix',
  name: string,
  inlined: boolean
}
