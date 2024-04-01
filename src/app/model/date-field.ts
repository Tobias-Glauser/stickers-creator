import {FieldCommonConfigs} from "./field-common-configs";

export interface DateField {
  discriminator: 'date'
  common_configs: FieldCommonConfigs,
  value: Date | null,
}
