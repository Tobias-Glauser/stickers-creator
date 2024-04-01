import {FieldCommonConfigs} from "./field-common-configs";

export interface TextField {
  discriminator: 'text'
  common_configs: FieldCommonConfigs,
  value: string | null
}
