import { Controller, Control } from "react-hook-form";
import { InputArea, InputBase } from "./styles";

interface InputProps {
  name: string;
  control: Control<any>;
  width?: string;
  placeholder?: string;
  type?: string;
}

export function Input({ name, control, width, placeholder, type }: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputArea width={width ? width : "100%"}>
          <InputBase
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type ? type : "text"}
          />
        </InputArea>
      )}
    />
  );
}
