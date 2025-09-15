import React from "react";
import { AlignRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import SignOut from "./SignOut";
import { SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs";

type TProfileMenu = {
  href: string;
  label: string;
};

const profileMenu: TProfileMenu[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/favorite",
    label: "Favorite",
  },
];

const DropDownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}>
            <AlignRight />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal" />
            </DropdownMenuItem>

            <DropdownMenuItem>
              <SignUpButton mode="modal" />
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>
            <DropdownMenuSeparator />
            {profileMenu.map((item: TProfileMenu, index: number) => (
              <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            ))}
            <SignOut />
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownMenu;
