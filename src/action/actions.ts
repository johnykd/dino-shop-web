"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { profileSchema, validatedWithZod } from "./schemas";
import db from "../../utils/db";
import { redirect } from "next/navigation";
const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "An error occured!!",
  };
};

const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("You must log in");
  }

  if (!user.privateMetadata.hasProfile) redirect("/profile");

  return user;
};

export const createProfile = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData) as Record<string, unknown>;
    const validatedFields = validatedWithZod(rawData, profileSchema);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        ...validatedFields,
      },
    });

    const client = await clerkClient();

    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    // console.log("error", error);
    return renderError(error);
  }
  redirect("/");
};
