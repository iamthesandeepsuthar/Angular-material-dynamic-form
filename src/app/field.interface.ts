export class Validator {
  name: string;
  validator: any;
  message: string;
}
export class FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: DdlItemModel[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
}

export class DdlItemModel {
  Text: string;
  TextHindi?: string;
  Value: any;
 
}