"use client"
import { FormComponent } from "@/components/shadcn/form-component"
import type { z } from "zod"
import { defaultSchema } from "../../../../lib/form-schema"

type FormValues = z.infer<typeof defaultSchema>

const fields: Array<{
  name: keyof FormValues
  label: string
  type: "input" | "checkbox" | "date" | "dropdown"
  items?: { label: string; value: string }[]
  placeholder?: string
}> = [
  { name: "name", label: "Navn", type: "input" },
  { name: "email", label: "Email", type: "input" },
  { name: "phoneNumber", label: "Telefonnummer", type: "input" },
  { name: "duration", label: "Varighed", type: "dropdown",
    items: [
      { label: "24 timer", value: "24" },
      { label: "48 timer", value: "48" },
      { label: "72 timer", value: "72" },
    ],
  },
  { name: "startDate", label: "Startdato", type: "date" },
  { name: "endDate", label: "Slutdato", type: "date" },
  { name: "pickupPoint", label: "Afhentningssted", type: "dropdown",
    items: [
      { label: "Sted A", value: "Valby" },
      { label: "Sted B", value: "Fredriksberg" },
    ],
  },
  { name: "returnPoint", label: "Afleveringssted", type: "dropdown",
    items: [
      { label: "Sted A", value: "Valby" },
      { label: "Sted B", value: "Fredriksberg" },
    ],
  },
  { name: "acceptance", label: "Accepter handelsbetingsler", type: "checkbox" },
]


export default function DefaultFormComponent() {
  const onSubmit = (values: FormValues) => {
    console.log(values)
    // Handle form submission
  }

  return <FormComponent<FormValues> fields={fields} schema={defaultSchema} onSubmit={onSubmit} />
}

