import { z } from "zod";

export const defaultSchema = z.object({
  name: z.string().nonempty({ message: "Navn er påkrævet" }),
  email: z.string().email({ message: "Email er ugyldig" }),
  phoneNumber: z.string().regex(/^\d{8}$/, { message: "Nummer skal indeholde 8 cifre" }),
  duration: z.string().nonempty({ message: "Varighed er påkrævet" }),
  startDate: z.date({required_error: "Startdato er påkrævet",invalid_type_error: "Startdato er ugyldig",}),
  pickupPoint: z.string().nonempty({ message: "Afhentningssted er påkrævet" }),
  returnPoint: z.string().nonempty({ message: "Afleveringssted er påkrævet" }),
  acceptance: z.boolean().refine((val) => val === true, { message: "Du skal acceptere betingelserne" }),
});


export const festivalSchema = z.object({
  name: z.string().nonempty({ message: "Navn er påkrævet" }),
  email: z.string().email({ message: "Email er ugyldig" }),
  phoneNumber: z.string().regex(/^\d{8}$/, { message: "Nummer skal indeholde 8 cifre" }),
  acceptance: z.boolean().refine(val => val === true, { message: "Du skal acceptere betingelserne" }),
});

export type FormSchemaType = z.infer<typeof defaultSchema>;