import {FieldCommonConfigs} from "./field-common-configs";

export interface NumberField {
  discriminator: 'number'
  common_configs: FieldCommonConfigs,
  value: number | null
}
