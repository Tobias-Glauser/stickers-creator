import {SelectFieldOption} from "./select-field-option";
import {FieldCommonConfigs} from "./field-common-configs";

export interface SelectField {
  discriminator: 'select'
  common_configs: FieldCommonConfigs,
  options: SelectFieldOption[]
  value: SelectFieldOption | null
}
