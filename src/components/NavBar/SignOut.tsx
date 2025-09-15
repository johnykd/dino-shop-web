"use client";

import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import { Button } from "../ui/button";

const SignOut = () => {
  return (
    <SignOutButton>
      <Button
        onClick={() =>
          toast("Lou out successful", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Log out
      </Button>
    </SignOutButton>
  );
};

export default SignOut;
