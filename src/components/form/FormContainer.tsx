"use client";

import React, { useEffect } from "react";
import { useActionState } from "react";
import { toast } from "sonner";

type TAction = (
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

type TFormContainer = {
  action: TAction;
  children: React.ReactNode;
};

const initialState = {
  message: "",
};

const FormContainer = ({ action, children }: TFormContainer) => {
  const [state, formAction] = useActionState(action, initialState);
  console.log("statem", state);
  useEffect(() => {
    if (state.message) {
      toast(state.message, {
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
