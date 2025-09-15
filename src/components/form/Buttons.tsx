"use client";

import React from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { RotateCw } from "lucide-react";

type btnSize = "default" | "lg" | "sm";

type TSubmitButtons = {
  className: string;
  text: string;
  size: btnSize;
};
const SubmitButtons = ({ className, size, text }: TSubmitButtons) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" className={className} size={size}>
      {pending ? <RotateCw className="animate-spin" /> : <p>{text}</p>}
    </Button>
  );
};

export default SubmitButtons;
