import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "firstName must be greater than 2" }),
  lastName: z.string().min(2, { message: "lastName must be greater than 2" }),
  userName: z.string().min(2, { message: "userName must be greater than 2" }),
});

export const validatedWithZod = <T extends z.ZodTypeAny>(
  data: unknown,
  schema: T
): z.infer<T> => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const messages = result.error?.issues.map((issue) => issue.message) ?? [];
    throw new Error(messages.join(","));
  }
  return result.data;
};
