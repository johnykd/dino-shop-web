import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button variant={"default"}>
      <Link href={"/"}>Logo</Link>
    </Button>
  );
};

export default Logo;
