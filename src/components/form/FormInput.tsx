import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TFormInput = {
  name: string;
  type: string;
  label: string;
  placeHolder: string;
};

const FormInput = (props: TFormInput) => {
  const { name, type, label, placeHolder } = props;
  return (
    <div>
      <Label htmlFor="firstName" className="mb-2">
        {label}
      </Label>
      <Input name={name} type={type} placeholder={placeHolder} />
    </div>
  );
};

export default FormInput;
