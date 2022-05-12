import type {
  FormattedInputProps,
  SelectProps,
} from '@mathesar-component-library/types';
import type { DateTimeFormatter } from '@mathesar/utils/date-time/types';

export interface CellTypeProps<Value> {
  value: Value | null | undefined;
  isActive: boolean;
  disabled: boolean;
}

// TextBox

export interface TextBoxCellExternalProps {
  length?: number | null;
}

export interface TextBoxCellProps
  extends CellTypeProps<string>,
    TextBoxCellExternalProps {}

// TextArea

export type TextAreaCellExternalProps = TextBoxCellExternalProps;

export type TextAreaCellProps = TextBoxCellProps;

// Number

export interface NumberCellExternalProps {
  locale?: string;
  allowFloat: boolean;
  isPercentage: boolean;
}

export interface NumberCellProps
  extends CellTypeProps<string | number>,
    NumberCellExternalProps {}

// Checkbox

export type CheckBoxCellExternalProps = Record<string, never>;

export type CheckBoxCellProps = CellTypeProps<boolean>;

// SingleSelect

export type SingleSelectCellExternalProps<Option> = Pick<
  SelectProps<Option>,
  'options' | 'getLabel'
>;

export interface SingleSelectCellProps<Option>
  extends CellTypeProps<Option>,
    SingleSelectCellExternalProps<Option> {}

// FormattedInput

export type FormattedInputCellExternalProps = Omit<
  FormattedInputProps<string>,
  'disabled' | 'value'
>;

export interface FormattedInputCellProps
  extends CellTypeProps<string>,
    FormattedInputCellExternalProps {}

// DateInput

export interface DateCellExternalProps {
  dateFormattingString: string;
  formatter: DateTimeFormatter;
}

export interface DateCellProps
  extends CellTypeProps<string>,
    DateCellExternalProps {}

// Common

export type HorizontalAlignment = 'left' | 'right' | 'center';
